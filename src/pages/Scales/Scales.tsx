import { useState } from 'react';
import { arrayFns } from '../../lib/objects/arrayFns';
import {
    NotesStrings,
    notesArray,
    getScale,
    getTuning,
    getTuningKind,
    getModes,
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

const instrumentOptions = ['guitar', 'bass'] as const;
const scaleKindOptions = [
    'diatonic',
    'harmonic',
    'doubleHarmonic',
    'pentatonic',
] as const;

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
    const [modeIndex, setMode] = useState<
        'diatonic' | 'harmonic' | 'doubleHarmonic' | 'pentatonic'
    >('diatonic');

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
    const modes = getModes(scaleKind);

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
            <SelectorField
                options={instrumentOptions}
                selected={instrument}
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
                title='Instrument'
            />
            <div className='flex'>
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
            </div>
            <SelectorField
                options={scaleKindOptions}
                selected={scaleKind}
                onChange={scaleKind => {
                    setScaleKind(scaleKind as any);
                    setMode('diatonic');
                }}
                title='Scale kind'
            />
            <button
                type='button'
                className='text-lg'
                onClick={() => setUsingChord(false)}
            >
                clear chord
            </button>
            <SelectorField
                options={modes}
                selected={modeIndex}
                onChange={() => setMode}
                title='Modes'
            />
            <SelectorField
                options={tuningKinds}
                selected={tuningKind}
                onChange={newValue => setTuningKind(newValue as any)}
                title='Tuning kind'
            />
            <SelectorField
                options={notesArray}
                selected={scale}
                onChange={newValue => setScale(newValue as any)}
                title='Key'
                mode='square'
            />
            <InstrumentTable
                body={tuning!.map(generateStringNotes)}
                handleChord={handleChord}
                foot={arrayFns.range(fretNumber + 1)}
            />
        </>
    );
}
