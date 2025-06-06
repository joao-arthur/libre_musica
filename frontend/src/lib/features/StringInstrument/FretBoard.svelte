<script lang="ts">
    import type { Instrument, Tuning } from "$lib/core/instrument";
    import type { ScaleKind } from "$lib/core/scale";
    import type { Note } from "$lib/core/note";

    import { num } from "funis";
    import { getTuning } from "$lib/core/instrument";
    import { getRange } from "$lib/core/note";
    import { build } from "$lib/core/scale";
    import { instrumentTable } from "$lib/store";
    import NoteCircle from "./NoteVisualization.svelte";

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
        fretboard = tuningNotes.map((baseNote) => getRange(baseNote, numberOfFrets));
        currentScale = build(root, scaleKind);
        rows = [...fretboard].toReversed();

        rangeOfFrets = num.range(0, numberOfFrets);
    });
</script>

<div class="container">
    {#each rangeOfFrets.slice(1) as i}
        <div
            class="col"
            style={`width: ${100 / (rangeOfFrets.length - 1)}%`}
        >
            {#each rows as row}
                <div class="row">
                    <NoteCircle active={currentScale.includes(row[i])} note={row[i]} />
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .col {
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .row {
        display: flex;
        flex-direction: row;
        width: 2.75rem;
        height: 2.75rem;
        padding: 1px;
        align-items: center;
        justify-content: center;
    }
</style>
