import { note } from '../../notes';

const { a, aSharp, b, c, d, dSharp, e, f, g } = note;

export const guitar = {
    label: 'Guitar',
    numberOfStrings: {
        min: 6,
        default: 6,
        max: 8,
    },
    tunings: {
        6: {
            standard: [e, a, d, g, b, e],
            nst: [c, g, d, a, e, g],
            dropd: [d, a, d, g, b, e],
            dropc: [c, g, c, f, a, d],
            dadgad: [d, a, d, g, a, d],
            dadaad: [d, a, d, a, a, d],
            incinerate: [d, dSharp, aSharp, dSharp, g, g],
        },
        7: { standard: [b, e, a, d, g, b, e] },
    },
} as const;
