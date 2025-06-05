<script lang="ts">
    import type { Instrument, Tuning } from "$lib/core/instrument";
    import type { ScaleKind } from "$lib/core/scale";
    import type { Option } from "$lib/core/options";

    import { Note } from "$lib/core/note";
    import { instrumentTable } from "$lib/store";
    import {
        getMaxNumberOfStrings,
        getMinNumberOfStrings,
        getTuningOptions,
        noteOptions,
        scaleKindOptions,
    } from "$lib/core/options";

    import NumberField from "$lib/components/molecules/NumberField.svelte";
    import RadioGroupField from "$lib/components/molecules/RadioGroupField.svelte";

    let instrument: Instrument;
    let root: Note;
    let numberOfFrets: number;
    let numberOfStrings: number;
    let scaleKind: ScaleKind;
    let tuning: Tuning;
    let tuningOptions: readonly Option<Tuning>[];

    instrumentTable.store.subscribe((value) => {
        instrument = value.instrument;
        root = value.root;
        numberOfFrets = value.numberOfFrets;
        numberOfStrings = value.numberOfStrings;
        scaleKind = value.scaleKind;
        tuning = value.tuning;

        tuningOptions = getTuningOptions(
            instrument,
            numberOfStrings,
        );
    });

    function onChangeNumberOfFrets(numberOfFrets: number) {
        instrumentTable.setNumberOfFrets(numberOfFrets);
    }

    function onChangeNumberOfStrings(numberOfStrings: number) {
        instrumentTable.setNumberOfStrings(numberOfStrings);
    }

    function onChangeScaleKind(scaleKind: ScaleKind) {
        instrumentTable.setScaleKind(scaleKind);
    }

    function onChangeTuning(tuning: Tuning) {
        instrumentTable.setTuning(tuning);
    }

    function onChangeRoot(root: Note) {
        instrumentTable.setRoot(root);
    }
</script>

<style>
    .container {
        width: 100%;
        background-color: #e5e7eb;
        display: flex;
    }

    section {
        display: flex;
        align-items: center;
        width: 100%;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
    }

    li {
        display: flex;
        border-radius: 99px;
        height: 50px;
        width: 50px;
        line-height: 50px;

        justify-content: center;
        align-items: center;

        background-color: red;
    }
</style>

<div class="container">
    <div>
        <NumberField
            title="Frets"
            min={11}
            max={30}
            value={numberOfFrets}
            onChange={onChangeNumberOfFrets}
        />
        <NumberField
            title="Strings"
            min={getMinNumberOfStrings(instrument)}
            max={getMaxNumberOfStrings(instrument)}
            value={numberOfStrings}
            onChange={onChangeNumberOfStrings}
        />
        <section>
            <RadioGroupField
                name="scaleKind"
                title="Scale"
                options={scaleKindOptions}
                value={scaleKind}
                onChange={onChangeScaleKind}
                size="lg"
            />
        </section>
        <section>
            <RadioGroupField
                title="Tuning"
                name="tuning"
                options={tuningOptions}
                value={tuning}
                onChange={onChangeTuning}
                size="md"
            />
        </section>
        <section>
            <RadioGroupField
                title="Key"
                name="key"
                options={noteOptions}
                value={root}
                onChange={onChangeRoot}
                size="sm"
            />
        </section>
    </div>
</div>
