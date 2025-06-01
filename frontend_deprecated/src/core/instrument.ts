import { Note } from "./note";

export type Instrument = "bass" | "guitar";

export type Tuning =
    | "standard"
    | "standard_half_below"
    | "standard_tone_below"
    | "new_standard"
    | "drop_d"
    | "drop_c";

function getKey(
    instrument: Instrument,
    numberOfStrings: number,
    tuning: Tuning,
) {
    return `(${instrument},${numberOfStrings},${tuning})`;
}

const tunings = new Map<string, readonly Note[]>();

tunings.set(getKey("bass", 4, "standard"), [Note.E, Note.A, Note.D, Note.G]);
tunings.set(getKey("bass", 4, "standard_half_below"), [Note.D_E, Note.G_A, Note.C_D, Note.F_G]);
tunings.set(getKey("bass", 4, "standard_tone_below"), [Note.D, Note.G, Note.C, Note.F]);
tunings.set(getKey("bass", 4, "new_standard"), [Note.C, Note.G, Note.D, Note.A]);
tunings.set(getKey("bass", 4, "drop_d"), [Note.D, Note.A, Note.D, Note.G]);
tunings.set(getKey("bass", 4, "drop_c"), [Note.C, Note.G, Note.C, Note.F]);
tunings.set(getKey("bass", 5, "standard"), [Note.B, Note.E, Note.A, Note.D, Note.G]);
tunings.set(getKey("bass", 6, "standard"), [Note.B, Note.E, Note.A, Note.D, Note.G, Note.C]);
tunings.set(getKey("guitar", 6, "standard"), [Note.E, Note.A, Note.D, Note.G, Note.B, Note.E]);
// deno-fmt-ignore
tunings.set(getKey("guitar", 6, "standard_half_below"), [Note.D_E, Note.G_A, Note.C_D, Note.F_G, Note.A_B, Note.D_E]);
// deno-fmt-ignore
tunings.set(getKey("guitar", 6, "standard_tone_below"), [Note.D, Note.G, Note.C, Note.F, Note.A, Note.D]);
tunings.set(getKey("guitar", 6, "new_standard"), [Note.C, Note.G, Note.D, Note.A, Note.E, Note.G]);
tunings.set(getKey("guitar", 6, "drop_d"), [Note.D, Note.A, Note.D, Note.G, Note.B, Note.E]);
tunings.set(getKey("guitar", 6, "drop_c"), [Note.C, Note.G, Note.C, Note.F, Note.A, Note.D]);
// deno-fmt-ignore
tunings.set(getKey("guitar", 7, "standard"), [Note.B, Note.E, Note.A, Note.D, Note.G, Note.B, Note.E]);

function getTuning(
    instrument: Instrument,
    numberOfStrings: number,
    tuning: Tuning,
): (readonly Note[]) | undefined {
    return tunings.get(getKey(instrument, numberOfStrings, tuning));
}

export const instrumentBus = {
    getTuning,
};
