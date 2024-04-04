import { noteName } from "./notesNames";

type naturalNote = {
    hasAccident?: false;
    name: noteName;
    number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
};

type accidentNote = {
    hasAccident: true;
    sharp: noteName;
    flat: noteName;
    number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
};

export type noteType = naturalNote | accidentNote;
