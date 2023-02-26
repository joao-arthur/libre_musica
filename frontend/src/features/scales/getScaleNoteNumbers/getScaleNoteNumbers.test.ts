import { getScaleNoteNumbers } from './getScaleNoteNumbers';

describe('getScaleNoteNumbers', () => {
    it('should return the scale relative note numbers', () => {
        expect(getScaleNoteNumbers('diatonic')).toEqual([0, 2, 4, 5, 7, 9, 11]);
        expect(getScaleNoteNumbers('pentatonic')).toEqual([0, 2, 4, 7, 9]);
        expect(getScaleNoteNumbers('harmonic')).toEqual([0, 2, 4, 5, 7, 8, 11]);
        expect(getScaleNoteNumbers('doubleHarmonic')).toEqual([
            0, 1, 4, 5, 7, 8, 11,
        ]);
    });
});
