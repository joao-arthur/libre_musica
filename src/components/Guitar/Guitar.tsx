import React, { useState } from 'react';
import * as Style from './Guitar.styles';
import Cell from './Cell';
import { Container, Label } from './Cell.styles';
import UniqueSelector from '../UniqueSelector';
import {
    NotesStrings,
    notesArray,
    isAtScale,
    strings,
    getNote
} from '../../core/notes';
import range from '../../core/utils/range';

export default function Guitar() {
    const [scale, setScale] = useState<NotesStrings>('C');
    const [fretNumber, setFretNumber] = useState(11);
    const [stringNumber, setStringNumber] = useState(6);
    const [instrument, setInstrument] = useState('Guitar');

    const generateStringNotes = (stringNote: number) =>
        range(fretNumber + 1).map(i => getNote((stringNote + i) % 12));
    return (
        <>
            <label>Instrument</label>
            <select
                id='cars'
                name='instrument'
                value={instrument}
                onChange={e => {
                    switch (e.target.value) {
                        case 'Guitar':
                            setStringNumber(6);
                            break;
                        case 'Bass':
                            setStringNumber(4);
                    }
                    setInstrument(e.target.value);
                }}
            >
                <option value='Guitar'>Guitar</option>
                <option value='Bass'>Bass</option>
            </select>
            <label>Scale</label>
            <select id='cars' name='carlist'>
                <option value='diatonic'>diatonic</option>
                <option value='harmonic'>harmonic</option>
                <option value='doubleHarmonic'>doubleHarmonic</option>
                <option value='pentatonic'>pentatonic</option>
            </select>
            <label>Tuning</label>
            <select id='tuning' name='tuning'>
                <option value='Standard'>Standard</option>
                <option value='Drop D'>Drop D</option>
                <option value='Drop C'>Drop C</option>
                <option value='DADGAD'>DADGAD</option>
            </select>
            <label>Strings</label>
            <input
                type='number'
                id='stringNumber'
                name='stringNumber'
                min={instrument === 'Guitar' ? 6 : 4}
                max={instrument === 'Guitar' ? 8 : 6}
                value={stringNumber}
                onChange={e => setStringNumber(parseInt(e.target.value, 10))}
            />
            <label>Frets</label>
            <input
                type='number'
                id='fretNumber'
                name='fretNumber'
                min='11'
                max='24'
                value={fretNumber}
                onChange={e => setFretNumber(parseInt(e.target.value, 10))}
            />
            <UniqueSelector
                options={notesArray}
                selected={scale}
                onChange={setScale}
            />
            <Style.Table>
                <tbody>
                    {strings[instrument][stringNumber].map((string, index) => (
                        <tr key={index}>
                            {generateStringNotes(string).map((note: any, i) => (
                                <Cell
                                    key={i}
                                    text={note}
                                    size={fretNumber}
                                    active={isAtScale(note, scale)}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        {range(fretNumber + 1).map(i => (
                            <Container key={i} size={fretNumber}>
                                <Label>
                                    <b>{i}</b>
                                </Label>
                            </Container>
                        ))}
                    </tr>
                </tfoot>
            </Style.Table>
        </>
    );
}
