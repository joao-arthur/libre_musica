import { expect, test } from "vitest";
import { getTuneOptions } from "./getTuneOptions";

test("getTuneOptions", () => {
    expect(
        getTuneOptions({
            selectedInstrument: "guitar",
            numberOfStrings: 6,
        }),
    ).toEqual([
        { label: "standard", value: "standard" },
        { label: "nst", value: "nst" },
        { label: "dropd", value: "dropd" },
        { label: "dropc", value: "dropc" },
        { label: "dadgad", value: "dadgad" },
        { label: "dadaad", value: "dadaad" },
        { label: "incinerate", value: "incinerate" },
    ]);
    expect(
        getTuneOptions({
            selectedInstrument: "guitar",
            numberOfStrings: 7,
        }),
    ).toEqual([{ label: "standard", value: "standard" }]);
    expect(
        getTuneOptions({ selectedInstrument: "bass", numberOfStrings: 4 }),
    ).toEqual([
        { label: "standard", value: "standard" },
        { label: "nst", value: "nst" },
        { label: "dropd", value: "dropd" },
        { label: "dropc", value: "dropc" },
        { label: "dada", value: "dada" },
    ]);
    expect(
        getTuneOptions({ selectedInstrument: "bass", numberOfStrings: 5 }),
    ).toEqual([{ label: "standard", value: "standard" }]);
    expect(
        getTuneOptions({ selectedInstrument: "bass", numberOfStrings: 6 }),
    ).toEqual([{ label: "standard", value: "standard" }]);
});
