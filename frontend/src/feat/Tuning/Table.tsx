import type { JSX } from "react";
import type { Note } from "@/core/notes/note";
import { num } from "funis";
import { instrument } from "@/core/instruments/instrument";
import { notes } from "@/core/notes/notes";
import { scales } from "@/core/scales/scales";
import {cls} from "@/core/cls";

type Props = {
    readonly numberOfFrets: number;
    readonly scaleNote: Note["number"];
    readonly scaleKind: "diatonic" | "harmonic" | "doubleHarmonic" | "pentatonic";
    readonly numberOfStrings: number;
    readonly selectedInstrument: "bass" | "guitar";
    readonly tuningKind: string;
};

export function TuningTable({
    numberOfFrets,
    scaleNote,
    scaleKind,
    numberOfStrings,
    selectedInstrument,
    tuningKind,
}: Props): JSX.Element {
    const tuning = instrument[selectedInstrument]
        .tunings[numberOfStrings][tuningKind]
        .map((baseNote) => notes.getNotesRange(baseNote, numberOfFrets));
    const currentScale = scales.getNoteScale(
        notes.getNoteByNumber(scaleNote),
        scaleKind,
    );
    const rows = [...tuning].reverse();

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex flex-col w-full">
                {rows.map((row, index) => (
                    <div className="flex flex-row w-full justify-between" key={index}>
                        {row.map((col, i) => (
                            <div className="flex items-center justify-center w-11 h-11 shrink-0">
                                <div
                                    className={cls(

                                        "flex items-center justify-center w-10 h-10 rounded-full text-white",
                                        currentScale.includes(col)
                                        ? "w-10 h-10"
                                        : "w-8 h-8",
                                        currentScale.includes(col)
                                            ? "bg-blue-800"
                                            : "bg-blue-400",
                                    )}
                                >
                                    <span>
                                        {notes.getNoteName(col, "standard")}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="flex flex-row w-full justify-between">
                    {num.range(0, numberOfFrets).map((i) => (
                        <div className="flex items-center justify-center w-11 h-11 shrink-0" key={i}>
                            <span>
                                {i}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
