import { getNotesRange } from './getNotesRange';
import { getNoteName } from './getNoteName';
import { getNoteByNumber } from './getNoteByNumber';

export const notes = {
    getNotesRange,
    getNoteName,
    getNoteByNumber,
} as const;
