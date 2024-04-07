import { expect, test } from "vitest";
import { note } from "../note";
import { getNoteByNumber } from "./getNoteByNumber";

test("getNoteByNumber", () => {
    expect(getNoteByNumber(0)).toBe(note.a);
    expect(getNoteByNumber(2)).toBe(note.b);
    expect(getNoteByNumber(11)).toBe(note.ga);
});
