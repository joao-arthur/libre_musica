import { useState } from "react";
import { instrument, instrumentNames, instruments } from "../../features/instruments";
import { notes, noteType } from "../../features/notes";
import { scaleNames, scales } from "../../features/scales";
import { SelectField } from "../../components/molecules/SelectField";
import { NumberField } from "../../components/molecules/NumberField";
import { InstrumentTable } from "./InstrumentTable";

const instrumentOptions = instruments.getOptions();
const scaleKindOptions = scales.getOptions();
const notesOptions = notes.getOptions();

export function Scales() {
    const [selectedInstrument, setInstrument] = useState<instrumentNames>(
        instrumentOptions[0].value,
    );
    const [scaleNote, setScale] = useState<noteType["number"]>(0);
    const [fretNumber, setFretNumber] = useState(11);
    const [numberOfStrings, setStringNumber] = useState<number>(
        instrument.guitar.numberOfStrings.default,
    );
    const [scaleKind, setScaleKind] = useState<scaleNames>(
        scaleKindOptions[0].value,
    );
    const [tuningKind, setTuningKind] = useState("standard");
    const tuningKinds = instruments.getTuneOptions({
        selectedInstrument,
        numberOfStrings: numberOfStrings as any,
    });

    return (
        <>
            <div className="flex">
                <SelectField
                    title="Instrument"
                    name="instrument"
                    options={instrumentOptions}
                    value={selectedInstrument}
                    onChange={(newInstrument) => {
                        setInstrument(newInstrument);
                        setStringNumber(
                            instrument[newInstrument].numberOfStrings.default,
                        );
                        setTuningKind("standard");
                    }}
                />
                <NumberField
                    title="Frets"
                    min={11}
                    max={24}
                    value={fretNumber}
                    onChange={setFretNumber}
                />
                <NumberField
                    title="Strings"
                    min={instrument[selectedInstrument].numberOfStrings.min}
                    max={instrument[selectedInstrument].numberOfStrings.max}
                    value={numberOfStrings}
                    onChange={(newStringNumber) => {
                        setStringNumber(newStringNumber);
                        setTuningKind("standard");
                    }}
                />
                <SelectField
                    name="scaleKind"
                    title="Scale"
                    options={scaleKindOptions}
                    value={scaleKind}
                    onChange={setScaleKind}
                />
                <SelectField
                    title="Tuning"
                    name="tuningKind"
                    options={tuningKinds}
                    value={tuningKind}
                    onChange={setTuningKind}
                />
                <SelectField
                    title="Key"
                    name="key"
                    options={notesOptions}
                    value={scaleNote}
                    onChange={setScale}
                />
            </div>
            <InstrumentTable
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
