import { arrayFns } from "../../../lib/objects/arrayFns/arrayFns";
import { getNoteByNumber } from "../getNoteByNumber/getNoteByNumber";
import { Note } from "../note";

export function getNotesRange(note: Note, size: number) {
    const range = arrayFns
        .range(size)
        .map((number) => number + note.number)
        .map(
            (absoluteNoteNumber) => (absoluteNoteNumber % 12) as Note["number"],
        )
        .map(getNoteByNumber);
    return range;
}
