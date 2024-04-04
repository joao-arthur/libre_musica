import { Note, note } from "../note";

export function getNoteByNumber(number: Note["number"]) {
    const foundNote = Object.values(note).find(
        (noteValue) => noteValue.number === number,
    )!;
    return foundNote;
}
