import { intervals } from '../intervals';

const { semitone, tone, toneAndHalf } = intervals;

export const doubleHarmonic = {
    name: 'doubleHarmonic',
    label: 'Double harmonic',
    intervals: [semitone, toneAndHalf, semitone, tone, semitone, toneAndHalf],
} as const;
