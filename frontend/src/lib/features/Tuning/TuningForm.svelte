<script lang="ts">
    import type { Instrument, Tuning } from "$lib/core/instrument";
    import type { ScaleKind } from "$lib/core/scale";

    import NumberField from "$lib/components/molecules/NumberField.svelte";
    import SelectField from "$lib/components/molecules/SelectField.svelte";

    import { getRange, Note } from "$lib/core/note";
    import { instrumentTable } from "$lib/store";
    import {
        getMaxNumberOfStrings,
        getMinNumberOfStrings,
        getTuningOptions,
        instrumentOptions,
        noteOptions,
        scaleKindOptions,
    } from "$lib/core/options";

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

    const tuningOptions = getTuningOptions(
        instrument,
        numberOfStrings,
    );

    function onChangeInstrument(instrument: string) {
        instrumentTable.setInstrument(instrument as any);
    }

    function onChangeNumberOfFrets(instrument: number) {
        instrumentTable.setNumberOfFrets(instrument as any);
    }

    function onChangeNumberOfStrings(instrument: number) {
        instrumentTable.setNumberOfStrings(instrument as any);
    }

    function onChangeScaleKind(instrument: string) {
        instrumentTable.setScaleKind(instrument as any);
    }

    function onChangeTuning(instrument: string) {
        instrumentTable.setTuning(instrument as any);
    }

    function onChangeRoot(instrument: string) {
        instrumentTable.setRoot(instrument as any);
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
