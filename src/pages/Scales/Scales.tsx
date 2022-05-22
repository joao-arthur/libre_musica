import { useEffect, useState } from 'react';
import { instruments, instrumentNames } from '../../features/instruments';
import { getTuning, getTuningKind } from '../../lib/notes';
import { SelectorField } from '../../components/molecules/SelectorField';
import { NumberField } from '../../components/molecules/NumberField';
import { InstrumentTable } from './InstrumentTable';
import { instrument } from '../../features/instruments/instrument';

type notes =
    | 'C'
    | 'C#'
    | 'D'
    | 'D#'
    | 'E'
    | 'F'
    | 'F#'
    | 'G'
    | 'G#'
    | 'A'
    | 'A#'
    | 'B';

const instrumentOptions = instruments.getOptions();

const scaleKindOptions = [
    { label: 'diatonic', value: 'diatonic' },
    { label: 'harmonic', value: 'harmonic' },
    { label: 'double harmonic', value: 'doubleHarmonic' },
    { label: 'pentatonic', value: 'pentatonic' },
] as const;

const notesOptions = [
    { label: 'C', value: 'C' },
    { label: 'C#', value: 'C#' },
    { label: 'D', value: 'D' },
    { label: 'D#', value: 'D#' },
    { label: 'E', value: 'E' },
    { label: 'F', value: 'F' },
    { label: 'F#', value: 'F#' },
    { label: 'G', value: 'G' },
    { label: 'G#', value: 'G#' },
    { label: 'A', value: 'A' },
    { label: 'A#', value: 'A#' },
    { label: 'B', value: 'B' },
];

export function Scales() {
    const [fretNumber, setFretNumber] = useState(11);
    const [numberOfStrings, setStringNumber] = useState<number>(
        instrument.guitar.numberOfStrings.default,
    );

    const [scaleNote, setScale] = useState<notes>('C');
    const [scaleKind, setScaleKind] = useState<
        'diatonic' | 'harmonic' | 'doubleHarmonic' | 'pentatonic'
    >('diatonic');
    const [selectedInstrument, setInstrument] =
        useState<instrumentNames>('guitar');
    const [tuningKind, setTuningKind] = useState<
        | 'standard'
        | 'nst'
        | 'dropd'
        | 'dropc'
        | 'dadgad'
        | 'dadaad'
        | 'incinerate'
    >('standard');

    const tuning = getTuning({
        instrument: selectedInstrument as any,
        stringNumber: numberOfStrings as any,
        tuningKind: tuningKind as any,
    });
    const tuningKinds = getTuningKind({
        instrument: selectedInstrument,
        stringNumber: numberOfStrings as any,
    });

    useEffect(() => {
        switch (selectedInstrument) {
            case 'guitar':
                setStringNumber(6);
                setTuningKind('standard');
                break;
            case 'bass':
                setStringNumber(4);
                setTuningKind('standard');
        }
    }, [selectedInstrument]);

    return (
        <>
            <div className='flex'>
                <SelectorField
                    title='Instrument'
                    name='instrument'
                    options={instrumentOptions}
                    value={selectedInstrument}
                    onChange={newInstrument =>
                        setInstrument(newInstrument as instrumentNames)
                    }
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
                <SelectorField
                    name='scaleKind'
                    title='Scale kind'
                    options={scaleKindOptions}
                    value={scaleKind}
                    onChange={scaleKind => {
                        setScaleKind(scaleKind as any);
                    }}
                />
                <SelectorField
                    title='Tuning kind'
                    name='tuningKind'
                    options={tuningKinds}
                    value={tuningKind}
                    onChange={newValue => setTuningKind(newValue as any)}
                />
                <SelectorField
                    title='Key'
                    name='key'
                    options={notesOptions}
                    value={scaleNote}
                    onChange={newValue => setScale(newValue as any)}
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
