import { NotesStrings } from '../../../lib/notes';
import { TableCell } from './TableCell';
import { TableLabel } from './TableLabel';

type fret = {
    note: NotesStrings;
    active: boolean;
};

type props = {
    body: fret[][];
    foot: (string | number)[];
    handleChord: (note: NotesStrings) => void;
};

export function InstrumentTable({ body, foot, handleChord }: props) {
    return (
        <table className='w-full border-collapse bg-grey-light'>
            <tbody>
                {body.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, i) => (
                            <TableCell
                                key={i}
                                text={cell.note}
                                active={cell.active}
                                onClick={() => handleChord(cell.note)}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    {foot.map(i => (
                        <td
                            className='cursor-pointer h-12 text-center border border-grey-dark'
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
