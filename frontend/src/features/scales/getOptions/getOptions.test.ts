import { getOptions } from "./getOptions";

describe("getOptions", () => {
    it("should return the scales", () => {
        expect(getOptions()).toEqual([
            { label: "Diatonic", value: "diatonic" },
            { label: "Pentatonic", value: "pentatonic" },
            { label: "Harmonic", value: "harmonic" },
            { label: "Double harmonic", value: "doubleHarmonic" },
        ]);
    });
});
