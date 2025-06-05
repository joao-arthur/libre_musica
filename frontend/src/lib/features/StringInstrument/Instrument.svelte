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
        rows = [...fretboard].reverse();

        rangeOfFrets = num.range(0, numberOfFrets);
    });

    function fmt(col: Note) {
        return formatNote(col);
    }
</script>

<div class="container">
    <div class="open-note">
        {#each rows as row}
            <div class="open-note-col">
                <button>&lt;</button>
                <div
                    class={currentScale.includes(row[0])
                        ? "colcontent scale-included"
                        : "colcontent scale-excluded"}
                >
                    <span>{fmt(row[0])}</span>
                </div>
                <button>&gt;</button>
            </div>
        {/each}
        <div class="footer">
            <div class="footer-col">
                <span>0</span>
            </div>
        </div>
    </div>
    <div class="frets">
        {#each rangeOfFrets.slice(1) as i}

                <div class="colaqui" style={`width: ${100 / (rangeOfFrets.length -1) }%`} >
                    <div class="rowaqui">
                        <div class={currentScale.includes(rows[0][i] )? "colcontent scale-included": "colcontent scale-excluded"}><span>{fmt(rows[0][i])}</span></div>
                    </div>
                    <div class="rowaqui">
                        <div class={currentScale.includes(rows[1][i] )? "colcontent scale-included": "colcontent scale-excluded"}><span>{fmt(rows[1][i])}</span></div>
                    </div>
                    <div class="rowaqui">
                        <div class={currentScale.includes(rows[2][i] )? "colcontent scale-included": "colcontent scale-excluded"}><span>{fmt(rows[2][i])}</span></div>
                    </div>
                    <div class="rowaqui">
                        <div class={currentScale.includes(rows[3][i] )? "colcontent scale-included": "colcontent scale-excluded"}><span>{fmt(rows[3][i])}</span></div>
                    </div>
                    <div class="rowaqui">
                        <div class={currentScale.includes(rows[4][i] )? "colcontent scale-included": "colcontent scale-excluded"}><span>{fmt(rows[4][i])}</span></div>
                    </div>
                    <div class="rowaqui">
                        <div class={currentScale.includes(rows[5][i] )? "colcontent scale-included": "colcontent scale-excluded"}><span>{fmt(rows[5][i])}</span></div>
                    </div>
                    
                        <div class="footer-col">
                            <span>{i}</span>
                        </div>
                </div>
        {/each}
    </div>
</div>

<style>
    .container {
        width: 100%;
        display: flex;
    }

    .open-note {
    }

    .open-note-col {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        flex-shrink: 0;
        border: 1px solid black;
    }

    .frets {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .row {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

    .col {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        flex-shrink: 0;
        border: 1px solid black;
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
    }

    .scale-excluded {
        width: 34px;
        height: 34px;
        background-color: #60a5fa;
        color: black;
    }

    .footer {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

    .footer-col {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        flex-shrink: 0;
    }
</style>
