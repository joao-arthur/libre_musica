export const notesNames = {
    a: { standard: "A", solfege: "Lá" },
    b: { standard: "B", solfege: "Sí" },
    c: { standard: "C", solfege: "Dó" },
    d: { standard: "D", solfege: "Ré" },
    e: { standard: "E", solfege: "Mí" },
    f: { standard: "F", solfege: "Fá" },
    g: { standard: "G", solfege: "Sol" },
} as const;

export type noteName = typeof notesNames[keyof typeof notesNames];

export type noteNamings = keyof typeof notesNames[keyof typeof notesNames];
