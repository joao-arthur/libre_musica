import { getNotesRange } from "./getNotesRange/getNotesRange";
import { getNoteName } from "./getNoteName/getNoteName";
import { getNoteByNumber } from "./getNoteByNumber/getNoteByNumber";
import { getOptions } from "./getOptions/getOptions";

export const notes = {
    getNotesRange,
    getNoteName,
    getNoteByNumber,
    getOptions,
} as const;
