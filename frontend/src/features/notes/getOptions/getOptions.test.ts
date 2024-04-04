import { accident } from "../accident";
import { getOptions } from "./getOptions";

describe("getOptions", () => {
    it("should return the notes options", () => {
        expect(getOptions()).toEqual([
            { label: "A", value: 0 },
            { label: "A♯", value: 1 },
            { label: "B", value: 2 },
            { label: "C", value: 3 },
            { label: "C♯", value: 4 },
            { label: "D", value: 5 },
            { label: "D♯", value: 6 },
            { label: "E", value: 7 },
            { label: "F", value: 8 },
            { label: "F♯", value: 9 },
            { label: "G", value: 10 },
            { label: "G♯", value: 11 },
        ]);

        expect(getOptions(accident.flat)).toEqual([
            { label: "A", value: 0 },
            { label: "B♭", value: 1 },
            { label: "B", value: 2 },
            { label: "C", value: 3 },
            { label: "D♭", value: 4 },
            { label: "D", value: 5 },
            { label: "E♭", value: 6 },
            { label: "E", value: 7 },
            { label: "F", value: 8 },
            { label: "G♭", value: 9 },
            { label: "G", value: 10 },
            { label: "A♭", value: 11 },
        ]);
    });
});
