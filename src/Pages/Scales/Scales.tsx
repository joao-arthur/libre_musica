import React, { useState } from 'react';
import {
    NotesStrings,
    notesArray,
    getNote,
    getScale,
    getTuning,
    getTuningKind,
    getModes
} from '../../core/notes';
import range from '../../core/range';
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
    const [tuningKind, setTuningKind] = useState(0);
    const [modeIndex, setMode] = useState(0);

    const actualScale = getScale(scale, modeIndex, scaleKind);
    const tuning = getTuning(instrument, stringNumber, tuningKind);
    const tuningKinds = getTuningKind(instrument, stringNumber);
    const modes = getModes(scaleKind);

    const generateStringNotes = (stringNote: number) =>
        range(fretNumber + 1)
            .map(fret => (stringNote + fret) % 12)
            .map(fret => ({
                note: getNote(fret),
                active: actualScale.includes(fret)
            }));

    const handleChord = (note: NotesStrings) => {};

    return (
        <>
            <Separator>
                <Selector
                    options={['guitar', 'bass']}
                    selected={instrument}
                    onChange={instrument => {
                        setInstrument(instrument);
                        if (instrument === 0) {
                            setStringNumber(6);
                            setTuningKind(0);
                        } else {
                            setStringNumber(4);
                            setTuningKind(0);
                        }
                    }}
                    title='Instrument'
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
                    onChange={stringNumber => {
                        setStringNumber(stringNumber);
                        setTuningKind(0);
                    }}
                    title='String number'
                />
                <Selector
                    options={[
                        'diatonic',
                        'harmonic',
                        'double harmonic',
                        'pentatonic'
                    ]}
                    selected={scaleKind}
                    onChange={scaleKind => {
                        setScaleKind(scaleKind);
                        setMode(0);
                    }}
                    title='Scale kind'
                />
            </Separator>
            <Separator>
                <Selector
                    options={modes}
                    selected={modeIndex}
                    onChange={setMode}
                    title='Modes'
                />
            </Separator>
            <Separator>
                <Selector
                    options={tuningKinds}
                    selected={tuningKind}
                    onChange={setTuningKind}
                    title='Tuning kind'
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
                fretNumber={fretNumber}
                body={tuning.map(generateStringNotes)}
                foot={range(fretNumber + 1)}
            />
        </>
    );
};
