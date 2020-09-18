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
    scaleKind: number[] = scales.diatonic
) =>
    reorderArrayByIndex(scaleKind, modeIndex).map(
        noteOfScale => (noteOfScale + note) % 12
    );

const test = () => {
    console.log(getScale(0, 0, scales.diatonic).map(e => notesArray[e]));
    console.log(getScale(0, 1, scales.diatonic).map(e => notesArray[e]));
    console.log(getScale(2, 0, scales.diatonic).map(e => notesArray[e]));
};

//const melodicScale = [];

export const strings = [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E];

const tunings = {
    guitar: {
        6: {
            standard: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E],
            dropd: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.D],
            dropc: [Notes.D, Notes.A, Notes.F, Notes.C, Notes.G, Notes.C],
            dadgad: [Notes.D, Notes.A, Notes.G, Notes.D, Notes.A, Notes.D]
        },
        7: {
            standard: [
                Notes.E,
                Notes.B,
                Notes.G,
                Notes.D,
                Notes.A,
                Notes.E,
                Notes.B
            ]
        }
    },
    bass: {
        4: {
            standard: [Notes.G, Notes.D, Notes.A, Notes.E],
            dropd: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E],
            dropc: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E]
        },
        5: { standard: [Notes.G, Notes.D, Notes.A, Notes.E, Notes.B] },
        6: {
            standard: [
                Notes.C,
                Notes.B,
                Notes.G,
                Notes.D,
                Notes.A,
                Notes.E,
                Notes.B
            ]
        }
    }
};

const scales = {
    diatonic: [0, 2, 4, 5, 7, 9, 11],
    harmonic: [0, 2, 4, 5, 7, 8, 11],
    doubleHarmonic: [0, 1, 4, 5, 7, 8, 11],
    pentatonic: [0, 2, 4, 7, 9]
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

export const getNote = (note: number) => notesArray[note];
