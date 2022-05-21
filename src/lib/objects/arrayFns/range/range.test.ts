import { range } from './range';

describe('reorder', () => {
    it('should reorder array', () => {
        expect(range(0)).toEqual([]);
        expect(range(1)).toEqual([0]);
        expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    });
});
