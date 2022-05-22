import { useState } from 'react';
import { instruments, instrumentNames } from '../../features/instruments';
import { getTuning, getTuningKind } from '../../lib/notes';
import { SelectField } from '../../components/molecules/SelectField';
import { NumberField } from '../../components/molecules/NumberField';
import { InstrumentTable } from './InstrumentTable';
import { instrument } from '../../features/instruments/instrument';
import { notes, noteType } from '../../features/notes';

type numberOfFretsType =
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;

const instrumentOptions = instruments.getOptions();

const scaleKindOptions = [
    { label: 'diatonic', value: 'diatonic' },
    { label: 'harmonic', value: 'harmonic' },
    { label: 'double harmonic', value: 'doubleHarmonic' },
    { label: 'pentatonic', value: 'pentatonic' },
] as const;

const notesOptions = notes.getOptions();

export function Scales() {
    const [selectedInstrument, setInstrument] = useState<
        typeof instrumentOptions[number]['value']
    >(instrumentOptions[0].value);
    const [scaleNote, setScale] = useState<noteType['number']>(0);
    const [fretNumber, setFretNumber] = useState<numberOfFretsType>(11);
    const [numberOfStrings, setStringNumber] = useState(
        instrument.guitar.numberOfStrings.default,
    );
    const [scaleKind, setScaleKind] = useState<
        typeof scaleKindOptions[number]['value']
    >(scaleKindOptions[0].value);
    const [tuningKind, setTuningKind] = useState('standard');

    const tuning = getTuning({
        instrument: selectedInstrument,
        stringNumber: numberOfStrings as any,
        tuningKind: tuningKind as any,
    });

    const tuningKinds = getTuningKind({
        instrument: selectedInstrument,
        stringNumber: numberOfStrings as any,
    });

    return (
        <>
            <div className='flex'>
                <SelectField
                    title='Instrument'
                    name='instrument'
                    options={instrumentOptions}
                    value={selectedInstrument}
                    onChange={newInstrument => {
                        setInstrument(newInstrument as instrumentNames);
                        setStringNumber(
                            instrument[newInstrument as instrumentNames]
                                .numberOfStrings.default,
                        );
                        setTuningKind('standard');
                    }}
                />
                <NumberField
                    min={11}
                    max={24}
                    value={fretNumber}
                    onChange={setFretNumber}
                    title='Frets'
                />
                <NumberField
                    min={instrument[selectedInstrument].numberOfStrings.min}
                    max={instrument[selectedInstrument].numberOfStrings.max}
                    value={numberOfStrings}
                    onChange={newStringNumber => {
                        setStringNumber(newStringNumber as any);
                        setTuningKind('standard');
                    }}
                    title='String number'
                />
                <SelectField
                    name='scaleKind'
                    title='Scale kind'
                    options={scaleKindOptions}
                    value={scaleKind}
                    onChange={setScaleKind}
                />
                <SelectField
                    title='Tuning kind'
                    name='tuningKind'
                    options={tuningKinds}
                    value={tuningKind}
                    onChange={newValue => setTuningKind(newValue as any)}
                />
                <SelectField
                    title='Key'
                    name='key'
                    options={notesOptions}
                    value={scaleNote}
                    onChange={setScale}
                />
            </div>
            <InstrumentTable
                tuning={tuning!}
                numberOfFrets={fretNumber}
                scaleNote={scaleNote}
                scaleKind={scaleKind}
            />
        </>
    );
}
