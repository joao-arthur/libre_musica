import { reorder } from './reorder';

describe('reorder', () => {
    it('should reorder array', () => {
        expect(reorder([4, 5, 6, 7, 8], 2)).toEqual([6, 7, 8, 4, 5]);
    });
});
