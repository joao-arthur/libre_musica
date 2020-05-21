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

export const isAtScale__ = (
    note: NotesStrings,
    scale: NotesStrings
): boolean => {
    console.log(Notes[note], Notes[scale]);

    //    console.log(getScale(0));
    //    console.log(getScale(1));
    //    console.log(getScale(2));
    //    console.log(getScale(3));
    //    console.log(getScale(4));
    //    console.log(getScale(5));
    //    console.log(getScale(6));
    //    console.log(getScale(7));
    //    console.log(getScale(8));
    //    console.log(getScale(9));
    //    console.log(getScale(10));
    //    console.log(getScale(11));
    //    console.log(getScale(12));

    return true;
};
