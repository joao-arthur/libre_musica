
<script lang="ts">
    export function Tuning(): JSX.Element {
        const [instrument, setInstrument] = useState<Instrument>("bass");
        const [root, setRoot] = useState<Note>(Note.C);
        const [numberOfFrets, setNumberOfFrets] = useState<number>(11);
        const [numberOfStrings, setNumberOfStrings] = useState<number>(4);
        const [scaleKind, setScaleKind] = useState<ScaleKind>("diatonic");
        const [tuning, setTuning] = useState<Tuning>("standard");
    
        function onChangeInstrument(newInstrument: Instrument): void {
            setInstrument(newInstrument);
            setNumberOfStrings(getDefaultNumberOfStrings(instrument));
            setTuning("standard");
        }
    
        function onChangeNumberOfStrings(newNumberOfStrings: number): void {
            setNumberOfStrings(newNumberOfStrings);
            setTuning("standard");
        }
    }
</script>

<div>
    <TuningForm
        instrument={instrument}
        root={root}
        numberOfFrets={numberOfFrets}
        numberOfStrings={numberOfStrings}
        scaleKind={scaleKind}
        tuning={tuning}
        onChangeInstrument={onChangeInstrument}
        onChangeRoot={setRoot}
        onChangeNumberOfFrets={setNumberOfFrets}
        onChangeNumberOfStrings={onChangeNumberOfStrings}
        onChangeScaleKind={setScaleKind}
        onChangeTuning={setTuning}
    />
    <TuningTable
        instrument={instrument}
        root={root}
        numberOfFrets={numberOfFrets}
        numberOfStrings={numberOfStrings}
        scaleKind={scaleKind}
        tuning={tuning}
    />
</div>