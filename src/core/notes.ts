//TODO verify bemol notes
export enum Notes {
    C = 0,
    'C#' = 1,
    D = 2,
    'D#' = 3,
    E = 4,
    F = 5,
    'F#' = 6,
    G = 7,
    'G#' = 8,
    A = 9,
    'A#' = 10,
    B = 11
}

export type NotesStrings = keyof typeof Notes;

const diatonicScale = [0, 2, 4, 5, 7, 9, 11];
const harmonicScale = [0, 2, 4, 5, 7, 8, 11];
const doubleHarmonicScale = [0, 1, 4, 5, 7, 8, 11];
const pentatonicScale = [0, 2, 4, 7, 9];

export const standardGuitar = [
    Notes.E,
    Notes.A,
    Notes.D,
    Notes.G,
    Notes.B,
    Notes.E
];
const dropDGuitar = [Notes.D, Notes.A, Notes.D, Notes.G, Notes.B, Notes.E];
const dropCGuitar = [Notes.C, Notes.G, Notes.C, Notes.F, Notes.A, Notes.D];

const DADGADGuitar = [Notes.D, Notes.A, Notes.D, Notes.G, Notes.A, Notes.D];

const standardBass = [Notes.E, Notes.A, Notes.D, Notes.G];
const dropDBass = [Notes.D, Notes.A, Notes.D, Notes.G];

const getScale = (scale: number) =>
    diatonicScale.map(note => (note + scale) % 12);

export const getNote = (note: any) => Notes[note];

export const isAtScale = (note: NotesStrings, scale: NotesStrings): boolean =>
    getScale(Notes[scale]).map(getNote).includes(note);
