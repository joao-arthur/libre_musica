import { intervals } from "./intervals";

const { semitone, tone, toneAndHalf } = intervals;

export const diatonic = {
    name: "diatonic",
    label: "Diatonic",
    intervals: [tone, tone, semitone, tone, tone, tone],
} as const;

export const pentatonic = {
    name: "pentatonic",
    label: "Pentatonic",
    intervals: [tone, tone, toneAndHalf, tone],
} as const;

export const harmonic = {
    name: "harmonic",
    label: "Harmonic",
    intervals: [tone, tone, semitone, tone, semitone, toneAndHalf],
} as const;

export const doubleHarmonic = {
    name: "doubleHarmonic",
    label: "Double harmonic",
    intervals: [semitone, toneAndHalf, semitone, tone, semitone, toneAndHalf],
} as const;

export const scale = {
    diatonic,
    pentatonic,
    harmonic,
    doubleHarmonic,
} as const;

export type ScaleName = keyof typeof scale;
