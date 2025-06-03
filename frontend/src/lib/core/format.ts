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

function romanceNaming(note: Note): string {
    switch (note) {
        case Note.A:
            return "Lá";
        case Note.B:
            return "Só";
        case Note.C:
            return "Dó";
        case Note.D:
            return "Ré";
        case Note.E:
            return "Mí";
        case Note.F:
            return "Fá";
        case Note.G:
            return "Sol";
        default:
            return "";
    }
}

function getNamingFn(noteNaming: NoteNaming): NamingFn {
    switch (noteNaming) {
        case "english":
            return englishNaming;
        case "romance":
            return romanceNaming;
    }
}

export function formatNote(
    note: Note,
    noteNaming: NoteNaming,
): string {
    const namingFn = getNamingFn(noteNaming);
    if (!hasAccident(note)) {
        return namingFn(note);
    }
    return namingFn(getFlat(note)) + sharp;
}
