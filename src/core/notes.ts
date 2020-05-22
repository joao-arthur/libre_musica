//TODO verify bemol notes
export enum Notes {
    C = 0,
    'C#' = 1,
    Db = 1,
    D = 2,
    'D#' = 3,
    Eb = 3,
    E = 4,
    F = 5,
    'F#' = 6,
    Gb = 6,
    G = 7,
    'G#' = 8,
    Ab = 8,
    A = 9,
    'A#' = 10,
    Bb = 10,
    B = 11
}

export type NotesStrings = keyof typeof Notes;

const diatonicScale = [0, 2, 4, 5, 7, 9, 11];
const harmonicScale = [0, 2, 4, 5, 7, 8, 11];
const doubleHarmonicScale = [0, 1, 4, 5, 7, 8, 11];
const pentatonicScale = [0, 2, 4, 7, 9];

const standardGuitar = [Notes.E, Notes.A, Notes.D, Notes.G, Notes.B, Notes.E];
const dropDGuitar = [Notes.D, Notes.A, Notes.D, Notes.G, Notes.B, Notes.E];
const dropCGuitar = [Notes.C, Notes.G, Notes.C, Notes.F, Notes.A, Notes.D];

const DADGADGuitar = [Notes.D, Notes.A, Notes.D, Notes.G, Notes.A, Notes.D];

const standardBass = [Notes.E, Notes.A, Notes.D, Notes.G];
const dropDBass = [Notes.D, Notes.A, Notes.D, Notes.G];

const getScale = (scale: number) =>
    diatonicScale.map(note => (note + scale) % 12);

const getNote = (note: any) => Notes[note];

export const isAtScale__ = (
    note: NotesStrings,
    scale: NotesStrings
): boolean => {
    const scaleNotes = getScale(Notes[scale]).map(getNote);
    console.log(scaleNotes, note);

    console.log(scaleNotes.includes(note));
    return true;
};
