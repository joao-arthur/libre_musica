import type { InstrumentName } from "@/core/instrument";
import type { Note } from "@/core/note";
import type { ScaleName } from "@/core/scale";
import { useState } from "react";
import { TuningTable } from "./Table";
import { TuningForm } from "./Form";

export function Tuning(): JSX.Element {
    const [selectedInstrument, setInstrument] = useState<InstrumentName>("bass");
    const [scaleNote, setScale] = useState<Note["number"]>(0);
    const [fretNumber, setFretNumber] = useState<number>(11);
    const [numberOfStrings, setStringNumber] = useState<number>(4);
    const [scaleKind, setScaleKind] = useState<ScaleName>("diatonic");
    const [tuningKind, setTuningKind] = useState("standard");

    return (
        <div className="flex h-full">
            <TuningForm
                selectedInstrument={selectedInstrument}
                setInstrument={setInstrument}
                scaleNote={scaleNote}
                setScale={setScale}
                fretNumber={fretNumber}
                setFretNumber={setFretNumber}
                numberOfStrings={numberOfStrings}
                setStringNumber={setStringNumber}
                scaleKind={scaleKind}
                setScaleKind={setScaleKind}
                tuningKind={tuningKind}
                setTuningKind={setTuningKind}
            />
            <TuningTable
                numberOfFrets={fretNumber}
                scaleNote={scaleNote}
                scaleKind={scaleKind}
                selectedInstrument={selectedInstrument}
                numberOfStrings={numberOfStrings}
                tuningKind={tuningKind}
            />
        </div>
    );
}
