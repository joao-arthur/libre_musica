import { useState } from 'react';
import { arrayFns } from '../../lib/objects/arrayFns';
import {
    NotesStrings,
    notesArray,
    getScale,
    getTuning,
    getTuningKind,
    Notes,
} from '../../lib/notes';
import { SelectorField } from '../../components/molecules/SelectorField';
import { NumberField } from '../../components/molecules/NumberField';
import { InstrumentTable } from '../../components/core/InstrumentTable';

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

const instrumentOptions = [
    { label: 'guitar', value: 'guitar' },
    { label: 'bass', value: 'bass' },
] as const;

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
    const [stringNumber, setStringNumber] = useState<4 | 5 | 6 | 7>(6);

    const [scale, setScale] = useState<notes>('C');
    const [scaleKind, setScaleKind] = useState<
        'diatonic' | 'harmonic' | 'doubleHarmonic' | 'pentatonic'
    >('diatonic');
    const [instrument, setInstrument] = useState<'guitar' | 'bass'>('guitar');
    const [tuningKind, setTuningKind] = useState<
        | 'standard'
        | 'nst'
        | 'dropd'
        | 'dropc'
        | 'dadgad'
        | 'dadaad'
        | 'incinerate'
    >('standard');

    const [chordNote, setChordNote] = useState(0);
    const [usingChord, setUsingChord] = useState(false);

    const actualScale = getScale(scale, scaleKind);
    const tuning = getTuning({
        instrument: instrument as any,
        stringNumber,
        tuningKind: tuningKind as any,
    });
    const tuningKinds = getTuningKind({
        instrument,
        stringNumber: stringNumber as any,
    });

    function generateStringNotes(stringNote: number) {
        const chordNoteIndex = actualScale.indexOf(chordNote);
        const chordScale = [
            actualScale[chordNoteIndex],
            actualScale[(chordNoteIndex + 2) % 7],
            actualScale[(chordNoteIndex + 4) % 7],
        ];
        const usedScale = usingChord ? chordScale : actualScale;

        return arrayFns
            .range(fretNumber + 1)
            .map(fret => (stringNote + fret) % 12)
            .map(fret => ({
                note: notesArray[fret],
                active: usedScale.includes(fret),
            }));
    }

    function handleChord(note: NotesStrings) {
        if (!actualScale.includes(Notes[note])) return;
        setUsingChord(true);
        setChordNote(Notes[note]);
    }

    return (
        <>
            <div className='flex'>
                <SelectorField
                    title='Instrument'
                    name='instrument'
                    options={instrumentOptions}
                    value={instrument}
                    onChange={instrument => {
                        setInstrument(instrument as any);
                        if (instrument === 'guitar') {
                            setStringNumber(6);
                            setTuningKind('standard');
                        } else {
                            setStringNumber(4);
                            setTuningKind('standard');
                        }
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
                    min={instrument === 'guitar' ? 6 : 4}
                    max={instrument === 'guitar' ? 7 : 6}
                    value={stringNumber}
                    onChange={stringNumber => {
                        setStringNumber(stringNumber as any);
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
                    value={scale}
                    onChange={newValue => setScale(newValue as any)}
                />
            </div>
            <button
                type='button'
                className='text-lg'
                onClick={() => setUsingChord(false)}
            >
                clear chord
            </button>
            <InstrumentTable
                body={tuning!.map(generateStringNotes)}
                handleChord={handleChord}
                foot={arrayFns.range(fretNumber + 1)}
            />
        </>
    );
}
