export const notesNames = {
    a: { standard: "A", solfege: "Lá" },
    b: { standard: "B", solfege: "Sí" },
    c: { standard: "C", solfege: "Dó" },
    d: { standard: "D", solfege: "Ré" },
    e: { standard: "E", solfege: "Mí" },
    f: { standard: "F", solfege: "Fá" },
    g: { standard: "G", solfege: "Sol" },
} as const;

type NoteName = typeof notesNames[keyof typeof notesNames];

export type NoteNamings = keyof typeof notesNames[keyof typeof notesNames];

type NaturalNote = {
    readonly hasAccident?: false;
    readonly name: NoteName;
    readonly number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
};

type AccidentNote = {
    readonly hasAccident: true;
    readonly sharp: NoteName;
    readonly flat: NoteName;
    readonly number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
};

export type Note = NaturalNote | AccidentNote;

const a = {
    name: notesNames.a,
    number: 0,
} as const;

const ab = {
    hasAccident: true,
    sharp: notesNames.a,
    flat: notesNames.b,
    number: 1,
} as const;

const b = {
    name: notesNames.b,
    number: 2,
} as const;

const c = {
    name: notesNames.c,
    number: 3,
} as const;

const cd = {
    hasAccident: true,
    sharp: notesNames.c,
    flat: notesNames.d,
    number: 4,
} as const;

const d = {
    name: notesNames.d,
    number: 5,
} as const;

const de = {
    hasAccident: true,
    sharp: notesNames.d,
    flat: notesNames.e,
    number: 6,
} as const;

const e = {
    name: notesNames.e,
    number: 7,
} as const;

const f = {
    name: notesNames.f,
    number: 8,
} as const;

const fg = {
    hasAccident: true,
    sharp: notesNames.f,
    flat: notesNames.g,
    number: 9,
} as const;

const g = {
    name: notesNames.g,
    number: 10,
} as const;

const ga = {
    hasAccident: true,
    sharp: notesNames.g,
    flat: notesNames.a,
    number: 11,
} as const;

export const note = {
    a,
    ab,
    b,
    c,
    cd,
    d,
    de,
    e,
    f,
    fg,
    g,
    ga,
} as const;
