import React from 'react';
import * as Style from './Table.styles';

interface props {
    body: Array<any>;
    foot: Array<any>;
}

export default ({ body, foot }: props) => (
    <Style.Table>
        <tbody>{body}</tbody>
        <tfoot>
            <tr>{foot}</tr>
        </tfoot>
    </Style.Table>
);
