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

enum Instrument {
    guitar,
    bass
}
type InstrumentStrings = keyof typeof Instrument;
const instruments: InstrumentStrings[] = ['guitar', 'bass'];

enum StringNumber {
    four,
    five,
    six,
    seven
}
type StringNumberStrings = keyof typeof StringNumber;
const stringsArray: StringNumberStrings[] = ['four', 'five', 'six', 'seven'];

enum TuningKind {
    standard,
    dropd,
    dropc,
    dadgad
}
type TuningKindStrings = keyof typeof TuningKind;
const tuningKind: TuningKindStrings[] = [
    'standard',
    'dropd',
    'dropc',
    'dadgad'
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
    scaleKind: number[] = scales.diatonic
) =>
    reorderArrayByIndex(scaleKind, modeIndex).map(
        noteOfScale => (noteOfScale + note) % 12
    );

export const getNote = (note: number) => notesArray[note];
export const getInstrument = (instrument: number): InstrumentStrings =>
    instruments[instrument];
export const getStringNumber = (stringNumber: number): StringNumberStrings => {
    switch (stringNumber) {
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
    }
    return 'four';
};
export const getTuningKind = (tuningKind: number): TuningKindStrings =>
    tuningKind[tuningKind];

export const getTuning = (
    instrument: InstrumentStrings,
    stringNumber: StringNumberStrings,
    tuningKind: TuningKindStrings
) => tunings[instrument][stringNumber][tuningKind];

export const strings = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];

const scales = {
    diatonic: [0, 2, 4, 5, 7, 9, 11],
    harmonic: [0, 2, 4, 5, 7, 8, 11],
    doubleHarmonic: [0, 1, 4, 5, 7, 8, 11],
    pentatonic: [0, 2, 4, 7, 9]
};

const tunings = {
    guitar: {
        four: {
            standard: [],
            dropd: [],
            dropc: [],
            dadgad: []
        },
        five: {
            standard: [],
            dropd: [],
            dropc: [],
            dadgad: []
        },
        six: {
            standard: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E],
            dropd: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.D],
            dropc: [Notes.D, Notes.A, Notes.F, Notes.C, Notes.G, Notes.C],
            dadgad: [Notes.D, Notes.A, Notes.G, Notes.D, Notes.A, Notes.D]
        },
        seven: {
            standard: [
                Notes.E,
                Notes.B,
                Notes.G,
                Notes.D,
                Notes.A,
                Notes.E,
                Notes.B
            ],
            dropd: [],
            dropc: [],
            dadgad: []
        }
    },
    bass: {
        four: {
            standard: [Notes.G, Notes.D, Notes.A, Notes.E],
            dropd: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E],
            dropc: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E],
            dadgad: []
        },
        five: {
            standard: [Notes.G, Notes.D, Notes.A, Notes.E, Notes.B],
            dropd: [],
            dropc: [],
            dadgad: []
        },
        six: {
            standard: [
                Notes.C,
                Notes.B,
                Notes.G,
                Notes.D,
                Notes.A,
                Notes.E,
                Notes.B
            ],
            dropd: [],
            dropc: [],
            dadgad: []
        },
        seven: {
            standard: [],
            dropd: [],
            dropc: [],
            dadgad: []
        }
    }
};

const settings = {
    guitar: {
        tunings: {
            6: ['standard', 'dropd', 'dropc', 'dadgad'],
            7: ['standard'],
            8: ['standard']
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
