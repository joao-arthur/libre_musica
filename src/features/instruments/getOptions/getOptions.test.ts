import { getOptions } from './getOptions';

describe('getOptions', () => {
    it('should return the instrument options', () => {
        expect(getOptions()).toEqual([
            { label: 'Bass', value: 'bass' },
            { label: 'Guitar', value: 'guitar' },
        ]);
    });
});
