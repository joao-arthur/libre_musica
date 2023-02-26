import { intervals } from '../intervals';

const { semitone, tone, toneAndHalf } = intervals;

export const harmonic = {
    name: 'harmonic',
    label: 'Harmonic',
    intervals: [tone, tone, semitone, tone, semitone, toneAndHalf],
} as const;
