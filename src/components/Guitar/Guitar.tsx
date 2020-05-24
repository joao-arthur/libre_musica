import React from 'react';
import * as Style from './Guitar.styles';
import Cell from './Cell';
import { DayBox, DayLabel } from './Cell.styles';
import UniqueSelector from '../UniqueSelector';
import { isAtScale, standardGuitar, getNote } from '../../core/notes';
import range from '../../core/utils/range';

const arrayOfNotes: string[] = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
];

const guitarFrets = 20;

const generateStringNotes = (stringNote: number) =>
    range(guitarFrets + 1).map(i => getNote((stringNote + i) % 12));

export default () => (
    <>
        <UniqueSelector options={arrayOfNotes} />
        <Style.Body>
            <tbody>
                {standardGuitar.reverse().map((string, index) => (
                    <tr key={index}>
                        {generateStringNotes(string).map((note: any, i) => (
                            <Cell
                                key={i}
                                text={note}
                                size={guitarFrets}
                                active={isAtScale(note, 'C')}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    {range(guitarFrets + 1).map(i => (
                        <DayBox key={i} size={guitarFrets}>
                            <DayLabel>
                                <b>{i}</b>
                            </DayLabel>
                        </DayBox>
                    ))}
                </tr>
            </tfoot>
        </Style.Body>
    </>
);
