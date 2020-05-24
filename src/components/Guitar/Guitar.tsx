import React, { useState } from 'react';
import * as Style from './Guitar.styles';
import Cell from './Cell';
import { Box, Label } from './Cell.styles';
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

const guitarFrets = 12;

const generateStringNotes = (stringNote: number) =>
    range(guitarFrets + 1).map(i => getNote((stringNote + i) % 12));

export default function Guitar() {
    const [scale, setScale] = useState<NotesStrings>('C');

    return (
        <>
            <UniqueSelector
                options={arrayOfNotes}
                selected={scale}
                onChange={setScale}
            />
            <Style.Body>
                <tbody>
                    {standardGuitar
                        .slice(0)
                        .reverse()
                        .map((string, index) => (
                            <tr key={index}>
                                {generateStringNotes(string).map(
                                    (note: any, i) => (
                                        <Cell
                                            key={i}
                                            text={note}
                                            size={guitarFrets}
                                            active={isAtScale(note, scale)}
                                        />
                                    )
                                )}
                            </tr>
                        ))}
                </tbody>
                <tfoot>
                    <tr>
                        {range(guitarFrets + 1).map(i => (
                            <Box key={i} size={guitarFrets}>
                                <Label>
                                    <b>{i}</b>
                                </Label>
                            </Box>
                        ))}
                    </tr>
                </tfoot>
            </Style.Body>
        </>
    );
}
