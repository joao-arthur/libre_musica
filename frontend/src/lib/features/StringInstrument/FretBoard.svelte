<script lang="ts">
    import type { Instrument, Tuning } from "$lib/core/instrument";
    import type { ScaleKind } from "$lib/core/scale";
    import type { Note } from "$lib/core/note";

    import { num } from "funis";
    import { formatNote } from "$lib/core/format";
    import { getTuning } from "$lib/core/instrument";
    import { getRange } from "$lib/core/note";
    import { build } from "$lib/core/scale";
    import { instrumentTable } from "$lib/store";
    import OpenNote from "./OpenNote.svelte";

    let instrument: Instrument;
    let root: Note;
    let numberOfFrets: number;
    let numberOfStrings: number;
    let scaleKind: ScaleKind;
    let tuning: Tuning;

    let tuningNotes: readonly Note[];
    let fretboard: readonly (readonly Note[])[];
    let currentScale: readonly Note[];
    let rows: readonly (readonly Note[])[];
    let rangeOfFrets: readonly number[];

    instrumentTable.store.subscribe((value) => {
        instrument = value.instrument;
        root = value.root;
        numberOfFrets = value.numberOfFrets;
        numberOfStrings = value.numberOfStrings;
        scaleKind = value.scaleKind;
        tuning = value.tuning;

        tuningNotes = getTuning(instrument, numberOfStrings, tuning) || [];
        fretboard = tuningNotes.map((baseNote) =>
            getRange(baseNote, numberOfFrets),
        );
        currentScale = build(root, scaleKind);
        rows = [...fretboard].toReversed();

        rangeOfFrets = num.range(0, numberOfFrets);
    });

    function fmt(col: Note) {
        return formatNote(col);
    }
</script>

<div class="frets">
    {#each rangeOfFrets.slice(1) as i}
        <div
            class="colaqui"
            style={`width: ${100 / (rangeOfFrets.length - 1)}%`}
        >
            <div class="rowaqui">
                <div
                    class={currentScale.includes(rows[0][i])
                        ? "colcontent scale-included"
                        : "colcontent scale-excluded"}
                >
                    <span>{fmt(rows[0][i])}</span>
                </div>
            </div>
            <div class="rowaqui">
                <div
                    class={currentScale.includes(rows[1][i])
                        ? "colcontent scale-included"
                        : "colcontent scale-excluded"}
                >
                    <span>{fmt(rows[1][i])}</span>
                </div>
            </div>
            <div class="rowaqui">
                <div
                    class={currentScale.includes(rows[2][i])
                        ? "colcontent scale-included"
                        : "colcontent scale-excluded"}
                >
                    <span>{fmt(rows[2][i])}</span>
                </div>
            </div>
            <div class="rowaqui">
                <div
                    class={currentScale.includes(rows[3][i])
                        ? "colcontent scale-included"
                        : "colcontent scale-excluded"}
                >
                    <span>{fmt(rows[3][i])}</span>
                </div>
            </div>
            <div class="rowaqui">
                <div
                    class={currentScale.includes(rows[4][i])
                        ? "colcontent scale-included"
                        : "colcontent scale-excluded"}
                >
                    <span>{fmt(rows[4][i])}</span>
                </div>
            </div>
            <div class="rowaqui">
                <div
                    class={currentScale.includes(rows[5][i])
                        ? "colcontent scale-included"
                        : "colcontent scale-excluded"}
                >
                    <span>{fmt(rows[5][i])}</span>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .frets {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .colcontent {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 9999px;
        color: white;
    }

    .scale-included {
        width: 40px;
        height: 40px;
        background-color: #1e40af;
    }

    .rowaqui {
        display: flex;
        flex-direction: row;
        width: 2.75rem;
        height: 2.75rem;
        padding: 1px;
        align-items: center;
        justify-content: center;
    }

    .colaqui {
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .scale-excluded {
        width: 34px;
        height: 34px;
        background-color: #60a5fa;
        color: black;
    }
</style>
