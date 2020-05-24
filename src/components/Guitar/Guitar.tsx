import React, { useState } from 'react';
import * as Style from './Guitar.styles';
import Cell from './Cell';
import { DayBox, DayLabel } from './Cell.styles';
import UniqueSelector from '../UniqueSelector';
import {
    NotesStrings,
    isAtScale,
    standardGuitar,
    getNote
} from '../../core/notes';
import range from '../../core/utils/range';

const arrayOfNotes: NotesStrings[] = [
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

//TODO verificar bug na geração das linhas

export default function Guitar() {
    const [scale, setScale] = useState<NotesStrings>('C');

    return (
        <>
            <UniqueSelector options={arrayOfNotes} onChange={setScale} />
            <Style.Body>
                <tbody>
                    {standardGuitar.reverse().map((string, index) => (
                        <tr key={index}>
                            {generateStringNotes(string).map((note: any, i) => (
                                <Cell
                                    key={i}
                                    text={note}
                                    size={guitarFrets}
                                    active={isAtScale(note, scale)}
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
}
