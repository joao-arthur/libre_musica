import { accident } from '../accident';
import { note } from '../note';
import { getNoteName } from './getNoteName';

describe('getNoteName', () => {
    it('should return the note name', () => {
        expect(getNoteName(note.a, 'standard')).toBe('A');
        expect(getNoteName(note.dSharp, 'standard', accident.bemol)).toBe('D♭');
        expect(getNoteName(note.fSharp, 'standard')).toBe('F♯');
        expect(getNoteName(note.a, 'solfege')).toBe('Lá');
        expect(getNoteName(note.dSharp, 'solfege', accident.bemol)).toBe('Ré♭');
        expect(getNoteName(note.fSharp, 'solfege')).toBe('Fá♯');
    });
});
