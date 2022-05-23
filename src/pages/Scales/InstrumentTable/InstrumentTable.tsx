import { instrument } from '../../../features/instruments';
import { notes, noteType } from '../../../features/notes';
import { scales } from '../../../features/scales';
import { arrayFns } from '../../../lib/objects/arrayFns';
import { TableCell } from './TableCell';
import { TableLabel } from './TableLabel';

type props = {
    numberOfFrets: number;
    scaleNote: noteType['number'];
    scaleKind: 'diatonic' | 'harmonic' | 'doubleHarmonic' | 'pentatonic';
    numberOfStrings: number;
    selectedInstrument: 'bass' | 'guitar';
    tuningKind: string;
};

export function InstrumentTable({
    numberOfFrets,
    scaleNote,
    scaleKind,
    numberOfStrings,
    selectedInstrument,
    tuningKind,
}: props) {
    const tuning = (instrument[selectedInstrument] as any).tunings[
        numberOfStrings
    ][tuningKind].map(baseNote =>
        notes.getNotesRange(baseNote, numberOfFrets + 1),
    );

    const currentScale = scales.getNoteScale(
        notes.getNoteByNumber(scaleNote),
        scaleKind,
    );

    return (
        <table className='w-full border-collapse bg-grey-light'>
            <tbody>
                {[...tuning].reverse().map((row, index) => (
                    <tr key={index}>
                        {row.map((currentNote, i) => (
                            <TableCell
                                key={i}
                                text={notes.getNoteName(
                                    currentNote,
                                    'standard',
                                )}
                                active={currentScale.includes(currentNote)}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    {arrayFns.range(numberOfFrets + 1).map(i => (
                        <td
                            className='h-12 text-center border border-grey-dark'
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
