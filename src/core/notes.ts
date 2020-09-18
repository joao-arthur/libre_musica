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

const diatonicScale = [0, 2, 4, 5, 7, 9, 11];
const harmonicScale = [0, 2, 4, 5, 7, 8, 11];
const doubleHarmonicScale = [0, 1, 4, 5, 7, 8, 11];
const pentatonicScale = [0, 2, 4, 7, 9];
//const melodicScale = [];

export const strings = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];

export const getNote = (note: number) => notesArray[note];
