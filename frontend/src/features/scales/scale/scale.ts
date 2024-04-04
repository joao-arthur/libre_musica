import { diatonic } from "./diatonic";
import { doubleHarmonic } from "./doubleHarmonic";
import { harmonic } from "./harmonic";
import { pentatonic } from "./pentatonic";

export const scale = {
    diatonic,
    pentatonic,
    harmonic,
    doubleHarmonic,
} as const;

export type scaleNames = keyof typeof scale;
