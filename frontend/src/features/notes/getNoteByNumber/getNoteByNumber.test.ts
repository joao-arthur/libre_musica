import { note } from '../note';
import { getNoteByNumber } from './getNoteByNumber';

describe('getNoteByNumber', () => {
    it('should return the note name', () => {
        expect(getNoteByNumber(0)).toBe(note.a);
        expect(getNoteByNumber(2)).toBe(note.b);
        expect(getNoteByNumber(11)).toBe(note.gSharp);
    });
});
