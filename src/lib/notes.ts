export enum Notes {
    A,
    'A#',
    B,
    C,
    'C#',
    D,
    'D#',
    E,
    F,
    'F#',
    G,
    'G#',
}

export type NotesStrings = keyof typeof Notes;
export const notesArray: NotesStrings[] = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
];

export function getScale(
    note:
        | 'A'
        | 'A#'
        | 'B'
        | 'C'
        | 'C#'
        | 'D'
        | 'D#'
        | 'E'
        | 'F'
        | 'F#'
        | 'G'
        | 'G#',
    scaleKind: 'diatonic' | 'harmonic' | 'doubleHarmonic' | 'pentatonic',
) {
    return getScales(scaleKind).map(
        noteOfScale => (noteOfScale + notesArray.indexOf(note)) % 12,
    );
}

type tuningsKindType =
    | {
          instrument: 'guitar';
          stringNumber: 6 | 7 | 8;
      }
    | {
          instrument: 'bass';
          stringNumber: 4 | 5 | 6;
      };

export function getTuningKind({ instrument, stringNumber }: tuningsKindType) {
    switch (instrument) {
        case 'guitar':
            switch (stringNumber) {
                case 6:
                    return [
                        { label: 'standard', value: 'standard' },
                        { label: 'nst', value: 'nst' },
                        { label: 'dropd', value: 'dropd' },
                        { label: 'dropc', value: 'dropc' },
                        { label: 'dadgad', value: 'dadgad' },
                        { label: 'dadaad', value: 'dadaad' },
                        { label: 'incinerate', value: 'incinerate' },
                    ];
                case 7:
                    return [{ label: 'standard', value: 'standard' }];
                case 8:
                    return [{ label: 'standard', value: 'standard' }];
            }
        case 'bass':
            switch (stringNumber) {
                case 4:
                    return [
                        { label: 'standard', value: 'standard' },
                        { label: 'nst', value: 'nst' },
                        { label: 'dropd', value: 'dropd' },
                        { label: 'dropc', value: 'dropc' },
                    ];
                case 5:
                    return [{ label: 'standard', value: 'standard' }];
                case 6:
                    return [{ label: 'standard', value: 'standard' }];
            }
    }
}

type tuningsType =
    | {
          instrument: 'guitar';
          stringNumber: 6 | 7;
          tuningKind:
              | 'standard'
              | 'nst'
              | 'dropd'
              | 'dropc'
              | 'dadgad'
              | 'dadaad'
              | 'incinerate';
      }
    | {
          instrument: 'bass';
          stringNumber: 4 | 5 | 6;
          tuningKind:
              | 'standard'
              | 'nst'
              | 'dropd'
              | 'dropc'
              | 'dadgad'
              | 'dadaad'
              | 'incinerate';
      };

export function getTuning({
    instrument,
    stringNumber,
    tuningKind,
}: tuningsType) {
    switch (instrument) {
        case 'guitar':
            switch (stringNumber) {
                case 6:
                    switch (tuningKind) {
                        case 'standard':
                            return [
                                Notes.E,
                                Notes.B,
                                Notes.G,
                                Notes.D,
                                Notes.A,
                                Notes.E,
                            ];
                        case 'nst':
                            return [
                                Notes.G,
                                Notes.E,
                                Notes.A,
                                Notes.D,
                                Notes.G,
                                Notes.C,
                            ];
                        case 'dropd':
                            return [
                                Notes.E,
                                Notes.B,
                                Notes.G,
                                Notes.D,
                                Notes.A,
                                Notes.D,
                            ];
                        case 'dropc':
                            return [
                                Notes.D,
                                Notes.A,
                                Notes.F,
                                Notes.C,
                                Notes.G,
                                Notes.C,
                            ];
                        case 'dadgad':
                            return [
                                Notes.D,
                                Notes.A,
                                Notes.G,
                                Notes.D,
                                Notes.A,
                                Notes.D,
                            ];
                        case 'dadaad':
                            return [
                                Notes.D,
                                Notes.A,
                                Notes.A,
                                Notes.D,
                                Notes.A,
                                Notes.D,
                            ];
                        case 'incinerate':
                            return [
                                Notes.G,
                                Notes.G,
                                Notes['D#'],
                                Notes['A#'],
                                Notes['D#'],
                                Notes.D,
                            ];
                    }
                case 7:
                    switch (tuningKind) {
                        case 'standard':
                            return [
                                Notes.E,
                                Notes.B,
                                Notes.G,
                                Notes.D,
                                Notes.A,
                                Notes.E,
                                Notes.B,
                            ];
                    }
                    break;
            }
            break;
        case 'bass':
            switch (stringNumber) {
                case 4:
                    switch (tuningKind) {
                        case 'standard':
                            return [Notes.G, Notes.D, Notes.A, Notes.E];
                        case 'nst':
                            return [Notes.A, Notes.D, Notes.G, Notes.C];
                        case 'dropd':
                            return [Notes.G, Notes.D, Notes.A, Notes.D];
                        case 'dropc':
                            return [Notes.F, Notes.C, Notes.G, Notes.C];
                    }
                    break;
                case 5:
                    switch (tuningKind) {
                        case 'standard':
                            return [
                                Notes.G,
                                Notes.D,
                                Notes.A,
                                Notes.E,
                                Notes.B,
                            ];
                    }
                    break;
                case 6:
                    switch (tuningKind) {
                        case 'standard':
                            return [
                                Notes.C,
                                Notes.G,
                                Notes.D,
                                Notes.A,
                                Notes.E,
                                Notes.B,
                            ];
                    }
                    break;
            }
    }
}

function getScales(
    scale: 'diatonic' | 'harmonic' | 'doubleHarmonic' | 'pentatonic',
) {
    switch (scale) {
        case 'diatonic':
            return [0, 2, 4, 5, 7, 9, 11];
        case 'harmonic':
            return [0, 2, 4, 5, 7, 8, 11];
        case 'doubleHarmonic':
            return [0, 1, 4, 5, 7, 8, 11];
        case 'pentatonic':
            return [0, 2, 4, 7, 9];
    }
}
