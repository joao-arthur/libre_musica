import type { JSX } from "react";
import type { Note } from "@/core/note";
import type { Instrument, Tuning } from "@/core/instrument";
import type { ScaleKind } from "@/core/scale";
import { num } from "funis";
import { cls } from "@/lib/cls";
import { noteBus } from "@/core/note";
import { scaleBus } from "@/core/scale";
import { formatBus } from "@/core/format";
import { instrumentBus } from "@/core/instrument";

type Props = {
    readonly instrument: Instrument;
    readonly root: Note;
    readonly numberOfFrets: number;
    readonly scaleKind: ScaleKind;
    readonly numberOfStrings: number;
    readonly tuning: Tuning;
};

export function TuningTable({
    numberOfFrets,
    root,
    scaleKind,
    numberOfStrings,
    instrument,
    tuning,
}: Props): JSX.Element {
    const tuningNotes = instrumentBus.getTuning(
        instrument,
        numberOfStrings,
        tuning,
    ) || [];

    const fretboard = tuningNotes.map((baseNote) => noteBus.getRange(baseNote, numberOfFrets));
    const currentScale = scaleBus.build(root, scaleKind);
    const rows = [...fretboard].reverse();

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex flex-col w-full">
                {rows.map((row, index) => (
                    <div className="flex flex-row w-full justify-between" key={index}>
                        {row.map((col) => (
                            <div className="flex items-center justify-center w-11 h-11 shrink-0">
                                <div
                                    className={cls(
                                        "flex items-center justify-center w-10 h-10 rounded-full text-white",
                                        currentScale.includes(col) ? "w-10 h-10" : "w-8 h-8",
                                        currentScale.includes(col) ? "bg-blue-800" : "bg-blue-400",
                                    )}
                                >
                                    <span>
                                        {formatBus.formatNote(col, "english")}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="flex flex-row w-full justify-between">
                    {num.range(0, numberOfFrets).map((i) => (
                        <div
                            className="flex items-center justify-center w-11 h-11 shrink-0"
                            key={i}
                        >
                            <span>{i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
