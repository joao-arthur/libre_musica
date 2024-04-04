import { arrayFns } from "../../../lib/objects/arrayFns";
import { getNoteByNumber } from "../getNoteByNumber";
import { noteType } from "../note";

export function getNotesRange(note: noteType, size: number) {
    const range = arrayFns
        .range(size)
        .map((number) => number + note.number)
        .map(
            (absoluteNoteNumber) => (absoluteNoteNumber % 12) as noteType["number"],
        )
        .map(getNoteByNumber);
    return range;
}
