import type { JSX } from "react";
import type { Note } from "../../../core/notes/note";
import { num } from "funis";
import { instrument } from "../../../core/instruments/instrument";
import { notes } from "../../../core/notes/notes";
import { scales } from "../../../core/scales/scales";
import { TableCell } from "./TableCell";
import { TableLabel } from "./TableLabel";

type Props = {
    readonly numberOfFrets: number;
    readonly scaleNote: Note["number"];
    readonly scaleKind: "diatonic" | "harmonic" | "doubleHarmonic" | "pentatonic";
    readonly numberOfStrings: number;
    readonly selectedInstrument: "bass" | "guitar";
    readonly tuningKind: string;
};

export function InstrumentTable({
    numberOfFrets,
    scaleNote,
    scaleKind,
    numberOfStrings,
    selectedInstrument,
    tuningKind,
}: Props): JSX.Element {
    const tuning = instrument[selectedInstrument]
        .tunings[numberOfStrings][tuningKind]
        .map((baseNote) => notes.getNotesRange(baseNote, numberOfFrets + 1));

    const currentScale = scales.getNoteScale(
        notes.getNoteByNumber(scaleNote),
        scaleKind,
    );

    return (
        <table className="w-full border-collapse bg-grey-light">
            <tbody>
                {[...tuning].reverse().map((row, index) => (
                    <tr key={index}>
                        {row.map((currentNote, i) => (
                            <TableCell
                                key={i}
                                text={notes.getNoteName(
                                    currentNote,
                                    "standard",
                                )}
                                active={currentScale.includes(currentNote)}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    {num.range(0, numberOfFrets + 1).map((i) => (
                        <td
                            className="h-12 text-center border border-grey-dark"
                            key={i}
                        >
                            <TableLabel>
                                <b>{i}</b>
                            </TableLabel>
                        </td>
                    ))}
                </tr>
            </tfoot>
        </table>
    );
}
