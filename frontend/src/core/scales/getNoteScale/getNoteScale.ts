import type { Note } from "../../notes/note";
import type { ScaleName } from "../scale";
import { notes } from "../../notes/notes";
import { getScaleNoteNumbers } from "../getScaleNoteNumbers/getScaleNoteNumbers";

export function getNoteScale(note: Note, scaleKind: ScaleName) {
    return getScaleNoteNumbers(scaleKind)
        .map((relativeNumber) => relativeNumber + note.number)
        .map(
            (noteRelativeNumber) => (noteRelativeNumber % 12) as Note["number"],
        )
        .map(notes.getNoteByNumber);
}
