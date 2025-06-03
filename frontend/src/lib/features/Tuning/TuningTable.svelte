
<script lang="ts">

    const tuningNotes = instrumentBus.getTuning(
        instrument,
        numberOfStrings,
        tuning,
    ) || [];

    const fretboard = tuningNotes.map((baseNote) => noteBus.getRange(baseNote, numberOfFrets));
    const currentScale = scaleBus.build(root, scaleKind);
    const rows = [...fretboard].reverse();

    let range = num.range(0, numberOfFrets);

    let formatted = formatNote(col, "english");

</script>

<div>
    <div>
        {#each rows as row}
                <div>
                    {#each row as col}
       
                        <div>
                            <div>
                                <span>
                                    {formatted}
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
