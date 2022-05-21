import { note } from '../note';
import { getNotesRange } from './getNotesRange';

describe('getNotesRange', () => {
    it('should return a range of notes', () => {
        expect(getNotesRange(note.a, 3)).toEqual([note.a, note.aSharp, note.b]);
        expect(getNotesRange(note.dSharp, 8)).toEqual([
            note.dSharp,
            note.e,
            note.f,
            note.fSharp,
            note.g,
            note.gSharp,
            note.a,
            note.aSharp,
        ]);
    });
});
