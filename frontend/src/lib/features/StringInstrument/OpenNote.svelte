<script lang="ts">
    import type { Instrument, Tuning } from "$lib/core/instrument";
    import type { ScaleKind } from "$lib/core/scale";
    import type { Note } from "$lib/core/note";

    import { getTuning } from "$lib/core/instrument";
    import { getRange } from "$lib/core/note";
    import { build } from "$lib/core/scale";
    import { instrumentTable } from "$lib/store";
    import NoteCircle from "./NoteCircle.svelte";

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
        rows = fretboard.toReversed();
    });
</script>

<div>
    {#each rows as row}
        <div class="note-container">
            <button>&lt;</button>
            <NoteCircle active={currentScale.includes(row[0])} note={row[0]} />
            <button>&gt;</button>
        </div>
    {/each}
    <div class="footer">
        <div class="footer-col">
            <span>0</span>
        </div>
    </div>
</div>

<style>
    .note-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.75rem;
        flex-shrink: 0;
        border: 1px solid black;
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
