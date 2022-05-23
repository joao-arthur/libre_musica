import { intervals } from '../intervals';

const { tone, toneAndHalf } = intervals;

export const pentatonic = {
    name: 'pentatonic',
    label: 'Pentatonic',
    intervals: [tone, tone, toneAndHalf, tone],
} as const;
