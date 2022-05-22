import { getNotesRange } from './getNotesRange';
import { getNoteName } from './getNoteName';
import { getNoteByNumber } from './getNoteByNumber';
import { getOptions } from './getOptions';

export const notes = {
    getNotesRange,
    getNoteName,
    getNoteByNumber,
    getOptions,
} as const;
