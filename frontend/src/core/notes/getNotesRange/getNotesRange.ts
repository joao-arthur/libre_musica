import { num } from "funis";
import { getNoteByNumber } from "../getNoteByNumber/getNoteByNumber";
import { Note } from "../note";

export function getNotesRange(note: Note, size: number): readonly Note[] {
    const range = num
        .range(0, size)
        .map((number) => number + note.number)
        .map(
            (absoluteNoteNumber) => (absoluteNoteNumber % 12) as Note["number"],
        )
        .map(getNoteByNumber);
    return range;
}
