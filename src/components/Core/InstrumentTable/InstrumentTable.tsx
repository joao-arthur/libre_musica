import React from 'react';
import { NotesStrings } from '../../../core/notes';
import * as Style from './InstrumentTable.styles';
import { Container, Label } from './TableCell/TableCell.styles';
import TableCell from './TableCell';

export interface Fret {
    note: NotesStrings;
    active: boolean;
}

interface props {
    body: Array<Array<Fret>>;
    foot: Array<any>;
    fretNumber: number;
}

export default ({ body, foot, fretNumber }: props) => (
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
