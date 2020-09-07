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

export type ModesStrings = keyof typeof Modes;
const dropDGuitar = [Notes.D, Notes.A, Notes.D, Notes.G, Notes.B, Notes.E];
const dropCGuitar = [Notes.C, Notes.G, Notes.C, Notes.F, Notes.A, Notes.D];
const DADGADGuitar = [Notes.D, Notes.A, Notes.D, Notes.G, Notes.A, Notes.D];
const dropDBass = [Notes.D, Notes.A, Notes.D, Notes.G];

type TInstrumentStrings = {
    [key: number]: number[];
};

interface TInstruments {
    [key: string]: TInstrumentStrings;
}

export const strings: TInstruments = {
    Bass: {
        4: [Notes.G, Notes.D, Notes.A, Notes.E],
        5: [Notes.G, Notes.D, Notes.A, Notes.E, Notes.B],
        6: [Notes.B, Notes.G, Notes.D, Notes.A, Notes.E, Notes.B]
    },
    Guitar: {
        6: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E],
        7: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E, Notes.B],
        8: [
            Notes.E,
            Notes.B,
            Notes.G,
            Notes.D,
            Notes.A,
            Notes.E,
            Notes.B,
            Notes['F#']
        ]
    }
};

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
