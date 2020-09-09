import React, { useState } from 'react';
import {
    NotesStrings,
    notesArray,
    isAtScale,
    strings,
    getNote
} from '../../core/notes';
import range from '../../core/range';
import Cell from '../../Components/Core/Table/TableCell/Cell';
import {
    Container,
    Label
} from '../../Components/Core/Table/TableCell/Cell.styles';
import BoxSelector from '../../Components/Core/BoxSelector';
import Selector from '../../Components/Core/Selector';
import NumberSelector from '../../Components/Core/NumberSelector';
import Table from '../../Components/Core/Table';
import { Separator } from './Scales.styles';

export default () => {
    const [scale, setScale] = useState(0);
    const [scaleKind, setScaleKind] = useState(0);
    const [fretNumber, setFretNumber] = useState(11);
    const [stringNumber, setStringNumber] = useState(6);
    const [instrument, setInstrument] = useState(0);
    const [tuning, setTuning] = useState(0);

    const generateStringNotes = (stringNote: number) =>
        range(fretNumber + 1).map(i => getNote((stringNote + i) % 12));

    return (
        <>
            <Separator>
                <Selector
                    options={[
                        { name: 'diatonic', value: 0 },
                        { name: 'harmonic', value: 1 },
                        { name: 'double harmonic', value: 2 },
                        { name: 'pentatonic', value: 3 }
                    ]}
                    selected={scaleKind}
                    onChange={setScaleKind}
                    title='Scale'
                />
                <Selector
                    options={[
                        { name: 'Standard', value: 0 },
                        { name: 'Drop D', value: 1 },
                        { name: 'Drop C', value: 2 },
                        { name: 'DADGAD', value: 3 }
                    ]}
                    selected={tuning}
                    onChange={setTuning}
                    title='Tuning'
                />
            </Separator>
            <Separator>
                <Selector
                    title='Instrument'
                    selected={instrument}
                    onChange={changeInstrument => {
                        switch (changeInstrument) {
                            case 0:
                                setStringNumber(6);
                                break;
                            case 1:
                                setStringNumber(4);
                        }
                        setInstrument(changeInstrument);
                    }}
                    options={[
                        { name: 'Guitar', value: 0 },
                        { name: 'Bass', value: 1 }
                    ]}
                />
                <NumberSelector
                    min={instrument === 0 ? 6 : 4}
                    max={instrument === 0 ? 8 : 6}
                    value={stringNumber}
                    onChange={setStringNumber}
                    title='Strings'
                />
                <NumberSelector
                    min={11}
                    max={24}
                    value={fretNumber}
                    onChange={setFretNumber}
                    title='Frets'
                />
            </Separator>
            <BoxSelector
                options={[
                    { name: 'C', value: 0 },
                    { name: 'C#', value: 1 },
                    { name: 'D', value: 2 },
                    { name: 'D#', value: 3 },
                    { name: 'E', value: 4 },
                    { name: 'F', value: 5 },
                    { name: 'F#', value: 6 },
                    { name: 'G', value: 7 },
                    { name: 'G#', value: 8 },
                    { name: 'A', value: 9 },
                    { name: 'A#', value: 10 },
                    { name: 'B', value: 11 }
                ]}
                selected={scale}
                onChange={setScale}
                title='Key'
            />
            <Table
                body={strings[instrument === 0 ? 'Guitar' : 'Bass'][
                    stringNumber
                ].map((string, index) => (
                    <tr key={index}>
                        {generateStringNotes(string).map((note: any, i) => (
                            <Cell
                                key={i}
                                text={note}
                                size={fretNumber}
                                active={isAtScale(note, scale, scaleKind)}
                            />
                        ))}
                    </tr>
                ))}
                foot={range(fretNumber + 1).map(i => (
                    <Container key={i} size={fretNumber}>
                        <Label>
                            <b>{i}</b>
                        </Label>
                    </Container>
                ))}
            />
        </>
    );
};
