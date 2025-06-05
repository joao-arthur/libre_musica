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
    import FretBoard from "./FretBoard.svelte";

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
        rows = fretboard.toReversed();

        rangeOfFrets = num.range(0, numberOfFrets);
    });

    function fmt(col: Note) {
        return formatNote(col);
    }
</script>

<div class="container">
    <OpenNote />
    <div class="content">
        <FretBoard />
        <div style="display: flex; width: 100%;">
            {#each rangeOfFrets.slice(1) as i}
                    <div class="footer-col" style={`width: ${100 / (rangeOfFrets.length - 1)}%`}>
                        <span>{i}</span>
                    </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .container {
        width: 100%;
        display: flex;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
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
