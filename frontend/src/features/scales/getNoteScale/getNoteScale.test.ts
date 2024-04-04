import { note } from "../../notes";
import { getNoteScale } from "./getNoteScale";

const { a, b, c, cSharp, d, e, f, fSharp, g, gSharp } = note;

describe("getNoteScale", () => {
    it("should return the notes scale", () => {
        expect(getNoteScale(c, "diatonic")).toEqual([c, d, e, f, g, a, b]);
        expect(getNoteScale(c, "pentatonic")).toEqual([c, d, e, g, a]);
        expect(getNoteScale(c, "harmonic")).toEqual([c, d, e, f, g, gSharp, b]);
        expect(getNoteScale(c, "doubleHarmonic")).toEqual([
            c,
            cSharp,
            e,
            f,
            g,
            gSharp,
            b,
        ]);
        expect(getNoteScale(g, "diatonic")).toEqual([g, a, b, c, d, e, fSharp]);
        expect(getNoteScale(d, "diatonic")).toEqual([
            d,
            e,
            fSharp,
            g,
            a,
            b,
            cSharp,
        ]);
        expect(getNoteScale(g, "pentatonic")).toEqual([g, a, b, d, e]);
    });
});
