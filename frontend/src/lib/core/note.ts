import { num } from "funis";

export enum Note {
    A,
    A_B,
    B,
    C,
    C_D,
    D,
    D_E,
    E,
    F,
    F_G,
    G,
    G_A,
}

export function hasAccident(note: Note): boolean {
    switch (note) {
        case Note.A:
            return false;
        case Note.A_B:
            return true;
        case Note.B:
            return false;
        case Note.C:
            return false;
        case Note.C_D:
            return true;
        case Note.D:
            return false;
        case Note.D_E:
            return true;
        case Note.E:
            return false;
        case Note.F:
            return false;
        case Note.F_G:
            return true;
        case Note.G:
            return false;
        case Note.G_A:
            return true;
    }
}

export function getSharp(note: Note): Note {
    switch (note) {
        case Note.A:
            return Note.A_B;
        case Note.A_B:
            return Note.B;
        case Note.B:
            return Note.C;
        case Note.C:
            return Note.C_D;
        case Note.C_D:
            return Note.D;
        case Note.D:
            return Note.D_E;
        case Note.D_E:
            return Note.E;
        case Note.E:
            return Note.F;
        case Note.F:
            return Note.F_G;
        case Note.F_G:
            return Note.G;
        case Note.G:
            return Note.G_A;
        case Note.G_A:
            return Note.A;
    }
}

export function getFlat(note: Note): Note {
    switch (note) {
        case Note.A:
            return Note.G_A;
        case Note.A_B:
            return Note.A;
        case Note.B:
            return Note.A_B;
        case Note.C:
            return Note.B;
        case Note.C_D:
            return Note.C;
        case Note.D:
            return Note.C_D;
        case Note.D_E:
            return Note.D;
        case Note.E:
            return Note.D_E;
        case Note.F:
            return Note.E;
        case Note.F_G:
            return Note.F;
        case Note.G:
            return Note.F_G;
        case Note.G_A:
            return Note.G;
    }
}

export function getRange(note: Note, size: number): readonly Note[] {
    return num
        .range(0, size)
        .map((number) => number + note)
        .map((absoluteNoteNumber) => (absoluteNoteNumber % 12))
        .filter((maybeNote) => maybeNote !== undefined)
        .map((note) => note!);
}
