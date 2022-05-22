import { notes, noteType } from '../../../features/notes';
import { getScale } from '../../../lib/notes';
import { arrayFns } from '../../../lib/objects/arrayFns';
import { TableCell } from './TableCell';
import { TableLabel } from './TableLabel';

type notesTypes =
    | 'C'
    | 'C#'
    | 'D'
    | 'D#'
    | 'E'
    | 'F'
    | 'F#'
    | 'G'
    | 'G#'
    | 'A'
    | 'A#'
    | 'B';

type props = {
    tuning: noteType['number'][];
    numberOfFrets: number;
    scaleNote: notesTypes;
    scaleKind: 'diatonic' | 'harmonic' | 'doubleHarmonic' | 'pentatonic';
};

export function InstrumentTable({
    tuning,
    numberOfFrets,
    scaleNote,
    scaleKind,
}: props) {
    const currentScale = getScale(scaleNote, scaleKind);

    return (
        <table className='w-full border-collapse bg-grey-light'>
            <tbody>
                {tuning
                    .map(baseNote =>
                        notes.getNotesRange(
                            notes.getNoteByNumber(baseNote),
                            numberOfFrets + 1,
                        ),
                    )
                    .map((row, index) => (
                        <tr key={index}>
                            {row.map((currentNote, i) => (
                                <TableCell
                                    key={i}
                                    text={notes.getNoteName(
                                        currentNote,
                                        'standard',
                                    )}
                                    active={currentScale.includes(
                                        currentNote.number,
                                    )}
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
