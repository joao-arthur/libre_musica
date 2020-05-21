import React from 'react';
import * as Style from './Guitar.styles';
import Cell from './Cell';
import { DayBox, DayLabel } from './Cell.styles';
import UniqueSelector from '../UniqueSelector';
import { Range } from 'immutable';

const notes: any = {
    C: 'C',
    'C#': 'C#',
    D: 'D',
    'D#': 'D#',
    E: 'E',
    F: 'F',
    'F#': 'F#',
    G: 'G',
    'G#': 'G#',
    A: 'A',
    'A#': 'A#',
    B: 'B'
};

const arrayOfNotes: string[] = [
    notes.C,
    notes['C#'],
    notes.D,
    notes['D#'],
    notes.E,
    notes.F,
    notes['F#'],
    notes.G,
    notes['G#'],
    notes.A,
    notes['A#'],
    notes.B
];

const guitarStrings = [notes.E, notes.A, notes.D, notes.G, notes.B, notes.E];
const guitarFrets = 20;

export default function guitar() {
    const generateStringNotes = (stringNote: string) =>
        Range(0, guitarFrets + 1).map(
            (i: number) =>
                notes[arrayOfNotes[(arrayOfNotes.indexOf(stringNote) + i) % 12]]
        );

    const isAtScale = (note: string) =>
        [
            notes.C,
            notes.D,
            notes.E,
            notes.F,
            notes.G,
            notes.A,
            notes.B
        ].includes(note);

    return (
        <>
            <UniqueSelector options={arrayOfNotes} />
            <Style.Body>
                <tbody>
                    {guitarStrings.reverse().map((string) => (
                        <tr>
                            {generateStringNotes(string).map((note: any) => (
                                <Cell
                                    text={note}
                                    size={guitarFrets}
                                    active={isAtScale(note)}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {Range(0, guitarFrets + 1).map((i: number) => (
                        <DayBox size={guitarFrets}>
                            <DayLabel>
                                <b>{i}</b>
                            </DayLabel>
                        </DayBox>
                    ))}
                </tfoot>
            </Style.Body>
        </>
    );
}
