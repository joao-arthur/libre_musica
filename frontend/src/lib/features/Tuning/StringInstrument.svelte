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
    let range: readonly number[];

    instrumentTable.store.subscribe((value) => {
        instrument = value.instrument;
        root = value.root;
        numberOfFrets = value.numberOfFrets;
        numberOfStrings = value.numberOfStrings;
        scaleKind = value.scaleKind;
        tuning = value.tuning;

        tuningNotes = getTuning(
            instrument,
            numberOfStrings,
            tuning,
        ) || [];
        fretboard = tuningNotes.map((baseNote) => getRange(baseNote, numberOfFrets));
        currentScale = build(root, scaleKind);
        rows = [...fretboard].reverse();
        range = num.range(0, numberOfFrets);
    });

    function fmt(col: Note) {
        return formatNote(col);
    }
</script>

<style>
    .container {
        width: 100%;
        overflow-x: auto;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;

        margin: 0;
        border: 0;
        padding: 0;  
    }

    .row {
        display: flex;
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
        width: 2.75rem; /* 44px */
        height: 2.75rem; /* 44px */
        flex-shrink: 0;
    }
</style>

<div class="container">
    <div class="content">
        {#each rows as row}
            <div class="row">
                {#each row as col}
                    <div class="col">
                        <div
                            class={currentScale.includes(col)
                            ? "colcontent scale-included"
                            : "colcontent scale-excluded"}
                        >
                            <span>
                                {fmt(col)}
                            </span>
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
        <div class="footer">
            {#each range as i}
                <div class="footer-col">
                    <span>{i}</span>
                </div>
            {/each}
        </div>
    </div>
</div>
