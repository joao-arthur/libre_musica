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
        instrumentOptions,
        noteOptions,
        scaleKindOptions,
    } from "$lib/core/options";

    import NumberField from "$lib/components/molecules/NumberField.svelte";
    import SelectField from "$lib/components/molecules/SelectField.svelte";

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

    function onChangeInstrument(instrument: Instrument) {
        instrumentTable.setInstrument(instrument);
    }

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
        background-color: #e5e7eb;
        width: 12rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<div class="container">
    <div>
        <SelectField
            title="Instrument"
            name="instrument"
            options={instrumentOptions}
            value={instrument}
            onChange={onChangeInstrument}
        />
        <NumberField
            title="Frets"
            min={11}
            max={24}
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
        <SelectField
            name="scaleKind"
            title="Scale"
            options={scaleKindOptions}
            value={scaleKind}
            onChange={onChangeScaleKind}
        />
        <SelectField
            title="Tuning"
            name="tuning"
            options={tuningOptions}
            value={tuning}
            onChange={onChangeTuning}
        />
        <SelectField
            title="Key"
            name="key"
            options={noteOptions}
            value={root}
            onChange={onChangeRoot}
        />
    </div>
</div>
