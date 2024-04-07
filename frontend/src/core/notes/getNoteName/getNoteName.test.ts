import { expect, test } from "vitest";
import { accident } from "../accident";
import { note } from "../note";
import { getNoteName } from "./getNoteName";

describe("getNoteName", () => {
    it("should return the note name", () => {
        expect(getNoteName(note.a, "standard")).toBe("A");
        expect(getNoteName(note.a, "solfege")).toBe("Lá");
        expect(getNoteName(note.a, "standard", accident.flat)).toBe("A");
        expect(getNoteName(note.a, "solfege", accident.flat)).toBe("Lá");
        expect(getNoteName(note.de, "standard")).toBe("D♯");
        expect(getNoteName(note.de, "solfege")).toBe("Ré♯");
        expect(getNoteName(note.de, "standard", accident.flat)).toBe("E♭");
        expect(getNoteName(note.de, "solfege", accident.flat)).toBe("Mí♭");
        expect(getNoteName(note.fg, "standard")).toBe("F♯");
        expect(getNoteName(note.fg, "solfege")).toBe("Fá♯");
        expect(getNoteName(note.fg, "standard", accident.sharp)).toBe("F♯");
        expect(getNoteName(note.fg, "solfege", accident.sharp)).toBe("Fá♯");
    });
});
