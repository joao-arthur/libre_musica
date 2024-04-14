import { note } from "./note";

const { a, ab, b, c, d, de, e, f, g } = note;

const bass = {
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

const guitar = {
    label: "Guitar",
    name: "guitar",
    numberOfStrings: {
        min: 6,
        default: 6,
        max: 7,
    },
    tunings: {
        6: {
            standard: [e, a, d, g, b, e],
            nst: [c, g, d, a, e, g],
            dropd: [d, a, d, g, b, e],
            dropc: [c, g, c, f, a, d],
            dadgad: [d, a, d, g, a, d],
            dadaad: [d, a, d, a, a, d],
            incinerate: [d, de, ab, de, g, g],
        },
        7: { standard: [b, e, a, d, g, b, e] },
    },
} as const;

export const instrument = {
    bass,
    guitar,
} as const;

export type InstrumentName = keyof typeof instrument;

function getOptions() {
    return Object.values(instrument).map((instrumentValue) => ({
        label: instrumentValue.label,
        value: instrumentValue.name,
    }));
}

type tuningOptions =
    | {
        selectedInstrument: "guitar";
        numberOfStrings: 6 | 7;
    }
    | {
        selectedInstrument: "bass";
        numberOfStrings: 4 | 5 | 6;
    };

function getTuneOptions({
    selectedInstrument,
    numberOfStrings,
}: tuningOptions) {
    function getTunings() {
        switch (selectedInstrument) {
            case "bass":
                return instrument.bass.tunings[numberOfStrings];
            case "guitar":
                return instrument.guitar.tunings[numberOfStrings];
        }
    }

    return Object.keys(getTunings()).map((tuning) => ({
        label: tuning,
        value: tuning,
    }));
}

export const instrumentBusiness = {
    getOptions,
    getTuneOptions,
} as const;
