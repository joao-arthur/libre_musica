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

export const getScale = (note: number, modeIndex: number, scaleKind: number) =>
    reorderArrayByIndex(getScales(scaleKind), modeIndex).map(
        noteOfScale => (noteOfScale + note) % 12
    );

export const getTuningKind = (instrument: number, stringNumber: number) =>
    tuningsNames[['guitar', 'bass'][instrument]][stringNumber];

export const getModes = (scaleKind: number) =>
    modes[['diatonic', 'harmonic', 'doubleHarmonic', 'pentatonic'][scaleKind]];

export const getTuning = (
    instrument: number,
    stringNumber: number,
    tuningKind: number
) =>
    tunings[['guitar', 'bass'][instrument]][stringNumber][
        ['standard', 'nst', 'dropd', 'dropc', 'dadgad', 'dadaad', 'incinerate'][
            tuningKind
        ]
    ];

const getScales = (index: number) =>
    scales[['diatonic', 'harmonic', 'doubleHarmonic', 'pentatonic'][index]];

interface Ikinds {
    [key: string]: number[];
}

const scales: Ikinds = {
    diatonic: [0, 2, 4, 5, 7, 9, 11],
    harmonic: [0, 2, 4, 5, 7, 8, 11],
    doubleHarmonic: [0, 1, 4, 5, 7, 8, 11],
    pentatonic: [0, 2, 4, 7, 9]
};

interface Istrings {
    [key: string]: Ikinds;
}

interface Ituning {
    [key: string]: Istrings;
}

const tunings: Ituning = {
    guitar: {
        6: {
            standard: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.E],
            nst: [Notes.G, Notes.E, Notes.A, Notes.D, Notes.G, Notes.C],
            dropd: [Notes.E, Notes.B, Notes.G, Notes.D, Notes.A, Notes.D],
            dropc: [Notes.D, Notes.A, Notes.F, Notes.C, Notes.G, Notes.C],
            dadgad: [Notes.D, Notes.A, Notes.G, Notes.D, Notes.A, Notes.D],
            dadaad: [Notes.D, Notes.A, Notes.A, Notes.D, Notes.A, Notes.D],
            incinerate: [
                Notes.G,
                Notes.G,
                Notes['D#'],
                Notes['A#'],
                Notes['D#'],
                Notes.D
            ]
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
            nst: [Notes.A, Notes.D, Notes.G, Notes.C],
            dropd: [Notes.G, Notes.D, Notes.A, Notes.D],
            dropc: [Notes.F, Notes.C, Notes.G, Notes.C]
        },
        5: {
            standard: [Notes.G, Notes.D, Notes.A, Notes.E, Notes.B]
        },
        6: {
            standard: [Notes.C, Notes.G, Notes.D, Notes.A, Notes.E, Notes.B]
        }
    }
};

interface ISettingsStringsKinds {
    [key: string]: Array<string>;
}

interface ISettings {
    [key: string]: ISettingsStringsKinds;
}

const tuningsNames: ISettings = {
    guitar: {
        6: [
            'standard',
            'nst',
            'dropd',
            'dropc',
            'dadgad',
            'dadaad',
            'incinerate'
        ],
        7: ['standard'],
        8: ['standard']
    },
    bass: {
        4: ['standard', 'nst', 'dropd', 'dropc'],
        5: ['standard'],
        6: ['standard']
    }
};

interface IModes {
    [key: string]: Array<string>;
}

const modes: IModes = {
    diatonic: [
        'Ionian',
        'Dorian',
        'Phrygian',
        'Lydian',
        'Mixolydian',
        'Aeolian',
        'Locrian'
    ],
    harmonic: [
        'Harmonic Major',
        'Locrian ♮2 ♮6 / Dorian ♭5',
        'Altered Dominant ♮5 / Phrygian ♭4',
        'Melodic Minor ♯4 / Lydian ♭3',
        'Mixolydian ♭2',
        'Lydian Augmented ♯2',
        'Locrian double flat7'
    ],
    doubleHarmonic: [
        'Double harmonic major',
        'Lydian ♯2 ♯6',
        'Ultraphrygian',
        'Hungarian/Gypsy minor',
        'Oriental',
        'Ionian ♯2 ♯5',
        'Locrian double flat3 double flat7'
    ],
    pentatonic: ['Ionian', 'Dorian', 'Phrygian', 'Mixolydian', 'Aeolian']
};
