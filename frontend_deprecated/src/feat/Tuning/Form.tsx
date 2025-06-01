import type { ScaleKind } from "@/core/scale";
import type { Instrument, Tuning } from "@/core/instrument";
import type { Note } from "@/core/note";
import {
    getMaxNumberOfStrings,
    getMinNumberOfStrings,
    getTuningOptions,
    instrumentOptions,
    noteOptions,
    scaleKindOptions,
} from "@/lib/options";
import { SelectField } from "@/comp/molecules/SelectField";
import { NumberField } from "@/comp/molecules/NumberField";

type Props = {
    readonly instrument: Instrument;
    readonly root: Note;
    readonly numberOfFrets: number;
    readonly numberOfStrings: number;
    readonly scaleKind: ScaleKind;
    readonly tuning: Tuning;
    readonly onChangeInstrument: (instrument: Instrument) => void;
    readonly onChangeRoot: (root: Note) => void;
    readonly onChangeNumberOfFrets: (numberOfFrets: number) => void;
    readonly onChangeNumberOfStrings: (numberOfStrings: number) => void;
    readonly onChangeScaleKind: (scaleKind: ScaleKind) => void;
    readonly onChangeTuning: (tuning: Tuning) => void;
};

export function TuningForm({
    instrument,
    root,
    numberOfFrets,
    numberOfStrings,
    scaleKind,
    tuning,
    onChangeInstrument,
    onChangeRoot,
    onChangeNumberOfFrets,
    onChangeNumberOfStrings,
    onChangeScaleKind,
    onChangeTuning,
}: Props): JSX.Element {
    const tuningOptions = getTuningOptions(
        instrument,
        numberOfStrings,
    );

    return (
        <div className="w-48 bg-gray-200 flex flex-col items-center">
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
    );
}
