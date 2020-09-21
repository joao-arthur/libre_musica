import React, { useState } from 'react';
import {
    notesArray,
    strings,
    getNote,
    getScale,
    getTuning,
    getInstrument,
    getStringNumber,
    getTuningKind
} from '../../core/notes';
import range from '../../core/range';
import {
    Container,
    Label
} from '../../Components/Core/InstrumentTable/TableCell/TableCell.styles';
import Selector from '../../Components/Core/Selector';
import NumberSelector from '../../Components/Core/NumberSelector';
import InstrumentTable from '../../Components/Core/InstrumentTable';
import { Separator } from './Scales.styles';

export default () => {
    const [fretNumber, setFretNumber] = useState(11);
    const [stringNumber, setStringNumber] = useState(6);

    const [scale, setScale] = useState(0);
    const [scaleKind, setScaleKind] = useState(0);
    const [instrument, setInstrument] = useState(0);
    const [tuningKind, setTuningKin] = useState(0);

    const actualScale = getScale(scale);
    const tuning = getTuning(
        getInstrument(instrument),
        getStringNumber(stringNumber),
        getTuningKind(tuningKind)
    );

    const generateStringNotes = (stringNote: number) =>
        range(fretNumber + 1)
            .map(fret => (stringNote + fret) % 12)
            .map(fret => ({
                note: getNote(fret),
                active: actualScale.includes(fret)
            }));

    return (
        <>
            <Separator>
                <Selector
                    options={[
                        'diatonic',
                        'harmonic',
                        'double harmonic',
                        'pentatonic'
                    ]}
                    selected={scaleKind}
                    onChange={setScaleKind}
                    title='Modes'
                />
            </Separator>
            <Separator>
                <Selector
                    options={['guitar', 'bass']}
                    selected={instrument}
                    onChange={setInstrument}
                    title='Instrument'
                />
                <Selector
                    options={[
                        'diatonic',
                        'harmonic',
                        'double harmonic',
                        'pentatonic'
                    ]}
                    selected={scaleKind}
                    onChange={setScaleKind}
                    title='Scale'
                />
                <NumberSelector
                    min={11}
                    max={24}
                    value={fretNumber}
                    onChange={setFretNumber}
                    title='Frets'
                />
                <NumberSelector
                    min={instrument === 0 ? 6 : 4}
                    max={instrument === 0 ? 7 : 6}
                    value={stringNumber}
                    onChange={setStringNumber}
                    title='String number'
                />
            </Separator>
            <Selector
                options={notesArray}
                selected={scale}
                onChange={setScale}
                title='Key'
                mode='square'
            />
            <InstrumentTable
                body={strings.map(generateStringNotes)}
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
