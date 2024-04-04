import { note } from "../../notes";

const { a, b, c, d, e, f, g } = note;

export const bass = {
    label: "Bass",
    name: "bass",
    numberOfStrings: {
        min: 4,
        default: 4,
        max: 6,
    },
    tunings: {
        4: {
            standard: [e, a, d, g],
            nst: [c, g, d, a],
            dropd: [d, a, d, g],
            dropc: [c, g, c, f],
            dada: [d, a, d, a],
        },
        5: { standard: [b, e, a, d, g] },
        6: { standard: [b, e, a, d, g, c] },
    },
} as const;
