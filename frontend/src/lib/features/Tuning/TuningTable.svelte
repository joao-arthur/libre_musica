<script lang="ts">
    import { formatNote } from "$lib/core/format";

    import type { Instrument, Tuning } from "$lib/core/instrument";
    import type { ScaleKind } from "$lib/core/scale";

    import { getTuning } from "$lib/core/instrument";
    import { getRange, Note } from "$lib/core/note";
    import { build } from "$lib/core/scale";
    import { instrumentTable } from "$lib/store";
    import { num } from "funis";

    let instrument: Instrument = undefined!;
    let root: Note = undefined!;
    let numberOfFrets: number = undefined!;
    let numberOfStrings: number = undefined!;
    let scaleKind: ScaleKind = undefined!;
    let tuning: Tuning = undefined!;

    instrumentTable.store.subscribe((value) => {
        instrument = value.instrument;
        root = value.root;
        numberOfFrets = value.numberOfFrets;
        numberOfStrings = value.numberOfStrings;
        scaleKind = value.scaleKind;
        tuning = value.tuning;
    });

    const tuningNotes = getTuning(
        instrument,
        numberOfStrings,
        tuning,
    ) || [];

    const fretboard = tuningNotes.map((baseNote) => getRange(baseNote, numberOfFrets));
    const currentScale = build(root, scaleKind);
    const rows = [...fretboard].reverse();
    let range = num.range(0, numberOfFrets);

    function fmt(col: Note) {
        return formatNote(col, "english");
    }
</script>

<div>
    <div>
        {#each rows as row}
            <div>
                {#each row as col}
                    <div>
                        <div>
                            <span>
                                {fmt(col)}
                            </span>
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
        <div>
            {#each range as i}
                <div>
                    <span>{i}</span>
                </div>
            {/each}
        </div>
    </div>
</div>
