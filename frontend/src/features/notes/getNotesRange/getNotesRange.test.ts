import { note } from "../note";
import { getNotesRange } from "./getNotesRange";

describe("getNotesRange", () => {
    it("should return a range of notes", () => {
        expect(getNotesRange(note.a, 3)).toEqual([note.a, note.ab, note.b]);
        expect(getNotesRange(note.de, 8)).toEqual([
            note.de,
            note.e,
            note.f,
            note.fg,
            note.g,
            note.ga,
            note.a,
            note.ab,
        ]);
    });
});
