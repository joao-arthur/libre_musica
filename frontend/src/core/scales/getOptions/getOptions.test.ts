import { expect, test } from "vitest";
import { getOptions } from "./getOptions";

test("getOptions", () => {
    expect(getOptions()).toEqual([
        { label: "Diatonic", value: "diatonic" },
        { label: "Pentatonic", value: "pentatonic" },
        { label: "Harmonic", value: "harmonic" },
        { label: "Double harmonic", value: "doubleHarmonic" },
    ]);
});
