import React from 'react';
import * as Style from './InstrumentTable.styles';
import TableCell from './TableCell';
import { NotesStrings } from '../../../core/notes';

interface fret {
    note: NotesStrings;
    active: boolean;
}

interface props {
    body: Array<Array<fret>>;
    foot: Array<any>;
}

export default ({ body, foot }: props) => (
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
            <tr>{foot}</tr>
        </tfoot>
    </Style.Table>
);
