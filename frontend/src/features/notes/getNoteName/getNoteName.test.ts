import { accident } from '../accident';
import { note } from '../note';
import { getNoteName } from './getNoteName';

describe('getNoteName', () => {
    it('should return the note name', () => {
        expect(getNoteName(note.a, 'standard')).toBe('A');
        expect(getNoteName(note.a, 'solfege')).toBe('Lá');
        expect(getNoteName(note.a, 'standard', accident.flat)).toBe('A');
        expect(getNoteName(note.a, 'solfege', accident.flat)).toBe('Lá');
        expect(getNoteName(note.dSharp, 'standard')).toBe('D♯');
        expect(getNoteName(note.dSharp, 'solfege')).toBe('Ré♯');
        expect(getNoteName(note.dSharp, 'standard', accident.flat)).toBe('E♭');
        expect(getNoteName(note.dSharp, 'solfege', accident.flat)).toBe('Mí♭');
        expect(getNoteName(note.fSharp, 'standard')).toBe('F♯');
        expect(getNoteName(note.fSharp, 'solfege')).toBe('Fá♯');
        expect(getNoteName(note.fSharp, 'standard', accident.sharp)).toBe('F♯');
        expect(getNoteName(note.fSharp, 'solfege', accident.sharp)).toBe('Fá♯');
    });
});
