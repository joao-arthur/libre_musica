import { expect, test } from "vitest";
import { note } from "../../notes/note";
import { getNoteScale } from "./getNoteScale";

const { a, b, c, cd, d, e, f, fg, g, ga } = note;

test("getNoteScale", () => {
    expect(getNoteScale(c, "diatonic")).toEqual([c, d, e, f, g, a, b]);
    expect(getNoteScale(c, "pentatonic")).toEqual([c, d, e, g, a]);
    expect(getNoteScale(c, "harmonic")).toEqual([c, d, e, f, g, ga, b]);
    expect(getNoteScale(c, "doubleHarmonic")).toEqual([
        c,
        cd,
        e,
        f,
        g,
        ga,
        b,
    ]);
    expect(getNoteScale(g, "diatonic")).toEqual([g, a, b, c, d, e, fg]);
    expect(getNoteScale(d, "diatonic")).toEqual([
        d,
        e,
        fg,
        g,
        a,
        b,
        cd,
    ]);
    expect(getNoteScale(g, "pentatonic")).toEqual([g, a, b, d, e]);
});
