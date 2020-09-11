//TODO verify bemol notes
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
type TNotes = typeof Notes;
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
const diatonicScale = [0, 2, 4, 5, 7, 9, 11];
const harmonicScale = [0, 2, 4, 5, 7, 8, 11];
const doubleHarmonicScale = [0, 1, 4, 5, 7, 8, 11];
const pentatonicScale = [0, 2, 4, 7, 9];
const melodicScale = [];
enum Modes {
    Ionian = 0,
    Dorian = 2,
    Phrygian = 4,
    Lydian = 5,
    Mixolydian = 7,
    Aeolian = 9,
    Locrian = 11
}

type TInstrumentStrings = {
    [key: number]: number[];
};

interface TInstruments {
    [key: string]: TInstrumentStrings;
}

export const strings: TInstruments = [
    Notes.E,
    Notes.B,
    Notes.G,
    Notes.D,
    Notes.A,
    Notes.E
];

const getScale = (scale: number, scaleKind: number) => {
    let chosenScale;
    switch (scaleKind) {
        case 0:
            chosenScale = diatonicScale;
            break;
        case 1:
            chosenScale = harmonicScale;
            break;
        case 2:
            chosenScale = doubleHarmonicScale;
            break;
        case 3:
            chosenScale = pentatonicScale;
            break;
        default:
            chosenScale = diatonicScale;
    }
    return chosenScale.map(note => (note + scale) % 12);
};

export const getNote = (note: any) => Notes[note];

export const isAtScale = (
    note: NotesStrings,
    scale: number,
    scaleKind: number
): boolean => getScale(scale, scaleKind).map(getNote).includes(note);
