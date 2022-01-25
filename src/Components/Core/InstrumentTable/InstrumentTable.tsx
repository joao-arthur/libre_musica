import { NotesStrings } from '../../../Core/notes';
import * as Style from './InstrumentTable.styles';
import { Container, Label } from './TableCell/TableCell.styles';
import TableCell from './TableCell';

export interface Fret {
    note: NotesStrings;
    active: boolean;
}

interface Props {
    body: Array<Array<Fret>>;
    foot: Array<any>;
    fretNumber: number;
    handleChord: (note: NotesStrings) => void;
}

const InstrumentTable = ({ body, foot, fretNumber, handleChord }: Props) => (
    <Style.Table>
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
    </Style.Table>
);

export default InstrumentTable;
