import React, { useState } from 'react';
import {
    NotesStrings,
    notesArray,
    isAtScale,
    strings,
    getNote
} from '../../core/notes';
import range from '../../core/utils/range';
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

export default function Guitar() {
    const [scale, setScale] = useState<NotesStrings>('C');
    const [fretNumber, setFretNumber] = useState(11);
    const [stringNumber, setStringNumber] = useState(6);
    const [instrument, setInstrument] = useState('Guitar');
    const [scaleKind, setScaleKind] = useState('diatonic');

    const generateStringNotes = (stringNote: number) =>
        range(fretNumber + 1).map(i => getNote((stringNote + i) % 12));
    return (
        <>
            <Separator>
                <BoxSelector
                    options={[
                        'diatonic',
                        'harmonic',
                        'doubleHarmonic',
                        'pentatonic'
                    ]}
                    selected={scaleKind}
                    onChange={setScaleKind}
                    title='Scale'
                />
                <BoxSelector
                    options={['Standard', 'Drop D', 'Drop C', 'DADGAD']}
                    selected={'Standard'}
                    onChange={() => {}}
                    title='Tuning'
                />
            </Separator>
            <Separator>
                <Selector
                    title='Instrument'
                    selected={instrument}
                    onChange={instrument => {
                        switch (instrument) {
                            case 'Guitar':
                                setStringNumber(6);
                                break;
                            case 'Bass':
                                setStringNumber(4);
                        }
                        setInstrument(instrument);
                    }}
                    options={['Guitar', 'Bass']}
                />
                <NumberSelector
                    min={instrument === 'Guitar' ? 6 : 4}
                    max={instrument === 'Guitar' ? 8 : 6}
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
                options={notesArray}
                selected={scale}
                onChange={setScale}
                title='Key'
            />
            <Table
                body={strings[instrument][stringNumber].map((string, index) => (
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
}
