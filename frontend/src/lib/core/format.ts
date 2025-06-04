import { getFlat, hasAccident, Note } from "./note";

export type NoteNaming = "english" | "romance";

type NamingFn = (note: Note) => string;

const sharp = "♯";

function englishNaming(note: Note): string {
    switch (note) {
        case Note.A:
            return "A";
        case Note.B:
            return "B";
        case Note.C:
            return "C";
        case Note.D:
            return "D";
        case Note.E:
            return "E";
        case Note.F:
            return "F";
        case Note.G:
            return "G";
        default:
            return "";
    }
}

export function formatNote(note: Note): string {
    if (!hasAccident(note)) {
        return englishNaming(note);
    }
    return englishNaming(getFlat(note)) + sharp;
}
