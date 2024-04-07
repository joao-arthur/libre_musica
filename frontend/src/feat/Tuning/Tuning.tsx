import { useState } from "react";
import { instruments } from "../../core/instruments/intruments";
import { instrument, InstrumentName } from "../../core/instruments/instrument";
import { Note } from "../../core/notes/note";
import { notes } from "../../core/notes/notes";
import { scales } from "../../core/scales/scales";
import { ScaleName } from "../../core/scales/scale";
import { TuningTable } from "./Table/Table";
import { TuningForm } from "./Form";

const instrumentOptions = instruments.getOptions();
const scaleKindOptions = scales.getOptions();
const notesOptions = notes.getOptions();

export function Tuning(): JSX.Element {
    const [selectedInstrument, setInstrument] = useState<InstrumentName>(
        instrumentOptions[0].value,
    );
    const [scaleNote, setScale] = useState<Note["number"]>(0);
    const [fretNumber, setFretNumber] = useState(11);
    const [numberOfStrings, setStringNumber] = useState<number>(
        instrument.guitar.numberOfStrings.default,
    );
    const [scaleKind, setScaleKind] = useState<ScaleName>(
        scaleKindOptions[0].value,
    );
    const [tuningKind, setTuningKind] = useState("standard");
    const tuningKinds = instruments.getTuneOptions({
        selectedInstrument,
        numberOfStrings: numberOfStrings as any,
    });

    return (
        <>
            <TuningForm />
            <TuningTable
                numberOfFrets={fretNumber}
                scaleNote={scaleNote}
                scaleKind={scaleKind}
                selectedInstrument={selectedInstrument}
                numberOfStrings={numberOfStrings}
                tuningKind={tuningKind}
            />
        </>
    );
}
