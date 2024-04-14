import type { Instrument, Tuning } from "@/core/instrument";
import type { ScaleKind } from "@/core/scale";
import { Note } from "@/core/note";

export type Option<T extends string | number> = {
    label: string;
    value: T;
};

export type Options<T extends string | number> = readonly Option<T>[];

export const instrumentOptions: Options<Instrument> = [
    { label: "Bass", value: "bass" },
    { label: "Guitar", value: "guitar" },
];

export const scaleKindOptions: Options<ScaleKind> = [
    { label: "Diatonic", value: "diatonic" },
    { label: "Pentatonic", value: "pentatonic" },
    { label: "Harmonic", value: "harmonic" },
    { label: "Double harmonic", value: "doubleHarmonic" },
];

export const noteOptions: Options<Note> = [
    { label: "A", value: Note.A },
    { label: "A♯", value: Note.A_B },
    { label: "B", value: Note.B },
    { label: "C", value: Note.C },
    { label: "C♯", value: Note.C_D },
    { label: "D", value: Note.D },
    { label: "D♯", value: Note.D_E },
    { label: "E", value: Note.E },
    { label: "F", value: Note.F },
    { label: "F♯", value: Note.F_G },
    { label: "G", value: Note.G },
    { label: "G♯", value: Note.G_A },
];

export function getTuningOptions(
    instrument: Instrument,
    numberOfStrings: number,
): Options<Tuning> {
    switch (instrument) {
        case "bass":
            switch (numberOfStrings) {
                case 4:
                    return [
                        { label: "Standard", value: "standard" },
                        { label: "Standard ♭", value: "standard_half_below" },
                        { label: "Standard ♭♭", value: "standard_tone_below" },
                        { label: "NST", value: "new_standard" },
                        { label: "Drop D", value: "drop_d" },
                        { label: "Drop C", value: "drop_c" },
                    ];
                case 5:
                    return [{ label: "Standard", value: "standard" }];
                case 6:
                    return [{ label: "Standard", value: "standard" }];
                default:
                    return [];
            }
        case "guitar":
            switch (numberOfStrings) {
                case 6:
                    return [
                        { label: "Standard", value: "standard" },
                        { label: "Standard ♭", value: "standard_half_below" },
                        { label: "Standard ♭♭", value: "standard_tone_below" },
                        { label: "NST", value: "new_standard" },
                        { label: "Drop D", value: "drop_d" },
                        { label: "Drop C", value: "drop_c" },
                    ];
                case 7:
                    return [{ label: "Standard", value: "standard" }];
                default:
                    return [];
            }
    }
}

export function getMinNumberOfStrings(instrument: Instrument): number {
    switch (instrument) {
        case "bass":
            return 4;
        case "guitar":
            return 6;
    }
}

export function getMaxNumberOfStrings(instrument: Instrument): number {
    switch (instrument) {
        case "bass":
            return 6;
        case "guitar":
            return 7;
    }
}

export function getDefaultNumberOfStrings(instrument: Instrument): number {
    switch (instrument) {
        case "bass":
            return 4;
        case "guitar":
            return 6;
    }
}
