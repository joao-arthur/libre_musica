import React from 'react';
import * as Style from './Table.styles';
import TableCell from './TableCell';

interface props {
    body: string[][];
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
                            text={cell}
                            size={row.length}
                            active={false}
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
