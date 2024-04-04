import { accident, accidentType } from "../accident";
import { noteNamings, noteType } from "../note";

export function getNoteName(
    note: noteType,
    noteNaming: noteNamings,
    selectedAccident?: accidentType,
) {
    if (!note.hasAccident) return note.name[noteNaming];
    switch (selectedAccident || accident.sharp) {
        case accident.flat:
            return note.flat[noteNaming] + accident.flat;
        case accident.sharp:
            return note.sharp[noteNaming] + accident.sharp;
    }
}
