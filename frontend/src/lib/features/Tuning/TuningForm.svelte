<script lang="ts">
    import NumberField from "$lib/components/molecules/NumberField.svelte";
    import SelectField from "$lib/components/molecules/SelectField.svelte";

    const { mutate, isPending, isSuccess } = useCreateAppointment();
    
    function onChangeInstrument(newInstrument: Instrument): void {
        setInstrument(newInstrument);
        setNumberOfStrings(getDefaultNumberOfStrings(instrument));
        setTuning("standard");
    }

    function onChangeNumberOfStrings(newNumberOfStrings: number): void {
        setNumberOfStrings(newNumberOfStrings);
        setTuning("standard");
    }

    const tuningOptions = getTuningOptions(
        instrument,
        numberOfStrings,
    );
</script>

<div>
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
