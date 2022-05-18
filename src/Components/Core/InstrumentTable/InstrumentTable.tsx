import { NotesStrings } from '../../../core/notes';
import { Table } from './InstrumentTable.styles';
import { Container, Label } from './TableCell/TableCell.styles';
import { TableCell } from './TableCell';

type fret = {
    note: NotesStrings;
    active: boolean;
};

type props = {
    body: fret[][];
    foot: (string | number)[];
    fretNumber: number;
    handleChord: (note: NotesStrings) => void;
};

export function InstrumentTable({
    body,
    foot,
    fretNumber,
    handleChord
}: props) {
    return (
        <Table>
            <tbody>
                {body.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, i) => (
                            <TableCell
                                key={i}
                                text={cell.note}
                                size={row.length}
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
                        <Container key={i} size={fretNumber}>
                            <Label>
                                <b>{i}</b>
                            </Label>
                        </Container>
                    ))}
                </tr>
            </tfoot>
        </Table>
    );
}
