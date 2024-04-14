import type { ScaleName } from "@/core/scales/scale";
import type { InstrumentName } from "@/core/instruments/instrument";
import { instruments } from "@/core/instruments/intruments";
import { instrument } from "@/core/instruments/instrument";
import { notes } from "@/core/notes/notes";
import { scales } from "@/core/scales/scales";
import { Note } from "@/core/notes/note";
import { SelectField } from "@/comp/molecules/SelectField";
import { NumberField } from "@/comp/molecules/NumberField";

const instrumentOptions = instruments.getOptions();
const scaleKindOptions = scales.getOptions();
const notesOptions = notes.getOptions();

type Props = {
    readonly selectedInstrument: InstrumentName;
    readonly setInstrument: (selectedInstrument: InstrumentName) => void;
    readonly scaleNote: Note["number"];
    readonly setScale: (scaleNote: Note["number"]) => void;
    readonly fretNumber: number;
    readonly setFretNumber: (fretNumber: number) => void;
    readonly numberOfStrings: number;
    readonly setStringNumber: (numberOfStrings: number) => void;
    readonly scaleKind: ScaleName;
    readonly setScaleKind: (scaleKind: ScaleName) => void;
    readonly tuningKind: string;
    readonly setTuningKind: (tuningKind: string) => void;
};

export function TuningForm({
    selectedInstrument,
    setInstrument,
    scaleNote,
    setScale,
    fretNumber,
    setFretNumber,
    numberOfStrings,
    setStringNumber,
    scaleKind,
    setScaleKind,
    tuningKind,
    setTuningKind,
}: Props): JSX.Element {
    const tuningKinds = instruments.getTuneOptions({
        selectedInstrument,
        numberOfStrings: numberOfStrings as any,
    });

    return (
        <div className="w-48 bg-gray-200 flex flex-col items-center">
            <div>
                <SelectField
                    title="Instrument"
                    name="instrument"
                    options={instrumentOptions}
                    value={selectedInstrument}
                    onChange={(newInstrument: "guitar" | "bass") => {
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
        </div>
    );
}
