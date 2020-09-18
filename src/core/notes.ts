import reorderArrayByIndex from './reorderArrayByIndex';

export enum Notes {
    C,
    'C#',
    D,
    'D#',
    E,
    F,
    'F#',
    G,
    'G#',
    A,
    'A#',
    B
}

export type NotesStrings = keyof typeof Notes;
export const notesArray: NotesStrings[] = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
];

const modes = [
    'Ionian',
    'Dorian',
    'Phrygian',
    'Lydian',
    'Mixolydian',
    'Aeolian',
    'Locrian'
];

export const getScale = (
    note: number = 0,
    modeIndex: number = 0,
    scaleKind: number[] = diatonicScale
) =>
    reorderArrayByIndex(scaleKind, modeIndex).map(
        noteOfScale => (noteOfScale + note) % 12
    );

const test = () => {
    console.log(getScale(0, 0, diatonicScale).map(e => notesArray[e]));
    console.log(getScale(0, 1, diatonicScale).map(e => notesArray[e]));
    console.log(getScale(2, 0, diatonicScale).map(e => notesArray[e]));
};

//const melodicScale = [];

export const strings = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];
const dropd = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.D];
const dropc = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];
const bass = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];
const dropdbass = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];
const dropcbass = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];
const bass5 = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];
const bass6 = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];
const guitar7 = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];
const guitar8 = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];
const dadgad = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];

const tunings = {
    guitar: {
        6: { standard: [], dropd: [], dropc: [], dadgad: [] },
        7: { standard: [] },
        8: { standard: [] }
    },
    bass: {
        4: { standard: [], dropd: [], dropc: [] },
        5: { standard: [] },
        6: { standard: [] }
    }
};

const scales = {
    diatonic = [0, 2, 4, 5, 7, 9, 11],
    harmonic = [0, 2, 4, 5, 7, 8, 11],
    doubleHarmonic = [0, 1, 4, 5, 7, 8, 11],
    pentatonic = [0, 2, 4, 7, 9]
};

const settings = {
    guitar: {
        tunings: {
            6: ['standard', 'dropd', 'dropc', 'dadgad'],
            7: ['standard'],
            7: ['standard']
        },
        scales: ['diatonic', 'harmonic', 'doubleHarmonic', 'pentatonic'],
        modes: {
            diatonic: [
                'Ionian',
                'Dorian',
                'Phrygian',
                'Lydian',
                'Mixolydian',
                'Aeolian',
                'Locrian'
            ]
        }
    },
    bass: {
        tunings: {
            4: ['standard', 'dropd', 'dropc'],
            5: ['standard'],
            6: ['standard']
        },
        scales: ['diatonic', 'harmonic', 'doubleHarmonic', 'pentatonic'],
        modes: {
            diatonic: [
                'Ionian',
                'Dorian',
                'Phrygian',
                'Lydian',
                'Mixolydian',
                'Aeolian',
                'Locrian'
            ]
        }
    }
};

export const getNote = (note: number) => notesArray[note];
