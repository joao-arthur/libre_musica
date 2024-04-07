import type { Note, NoteNamings } from "../note";
import { Accident, accident } from "../accident";

export function getNoteName(
    note: Note,
    noteNaming: NoteNamings,
    selectedAccident?: Accident,
) {
    if (!note.hasAccident) return note.name[noteNaming];
    switch (selectedAccident || accident.sharp) {
        case accident.flat:
            return note.flat[noteNaming] + accident.flat;
        case accident.sharp:
            return note.sharp[noteNaming] + accident.sharp;
    }
}
