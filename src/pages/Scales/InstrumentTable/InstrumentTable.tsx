import { notes } from '../../../features/notes';
import { getScale, Notes } from '../../../lib/notes';
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
    tuning: Notes[];
    numberOfFrets: number;
    scale: notesTypes;
    scaleKind: 'diatonic' | 'harmonic' | 'doubleHarmonic' | 'pentatonic';
};

export function InstrumentTable({
    tuning,
    numberOfFrets,
    scale,
    scaleKind,
}: props) {
    const actualScale = getScale(scale, scaleKind);

    function generateStringNotes(stringNote: number) {
        return arrayFns
            .range(numberOfFrets + 1)
            .map(
                fret =>
                    ((stringNote + fret) % 12) as
                        | 0
                        | 1
                        | 2
                        | 3
                        | 4
                        | 5
                        | 6
                        | 7
                        | 8
                        | 9
                        | 10
                        | 11,
            )
            .map(fret => ({
                note: notes.getNoteByNumber(fret),
                active: actualScale.includes(fret),
            }));
    }

    const body = tuning.map(generateStringNotes);

    return (
        <table className='w-full border-collapse bg-grey-light'>
            <tbody>
                {body.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, i) => (
                            <TableCell
                                key={i}
                                text={notes.getNoteName(cell.note!, 'standard')}
                                active={cell.active}
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
