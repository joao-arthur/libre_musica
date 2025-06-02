import type { Note } from "./note";
import { Interval } from "./interval";

const diatonicScale = [
    Interval.TONE,
    Interval.TONE,
    Interval.SEMITONE,
    Interval.TONE,
    Interval.TONE,
    Interval.TONE,
];

const pentatonicScale = [
    Interval.TONE,
    Interval.TONE,
    Interval.TONE_AND_HALF,
    Interval.TONE,
];

const harmonicScale = [
    Interval.TONE,
    Interval.TONE,
    Interval.SEMITONE,
    Interval.TONE,
    Interval.SEMITONE,
    Interval.TONE_AND_HALF,
];

const doubleHarmonicScale = [
    Interval.SEMITONE,
    Interval.TONE_AND_HALF,
    Interval.SEMITONE,
    Interval.TONE,
    Interval.SEMITONE,
    Interval.TONE_AND_HALF,
];

export type ScaleKind = "diatonic" | "pentatonic" | "harmonic" | "doubleHarmonic";

function getScaleByKind(scaleKind: ScaleKind): readonly Interval[] {
    switch (scaleKind) {
        case "diatonic":
            return diatonicScale;
        case "pentatonic":
            return pentatonicScale;
        case "harmonic":
            return harmonicScale;
        case "doubleHarmonic":
            return doubleHarmonicScale;
    }
}

function getScaleNotes(scaleKind: ScaleKind): readonly Note[] {
    const scaleIntervals = getScaleByKind(scaleKind);
    return [0].concat(
        scaleIntervals.map((_, index) =>
            scaleIntervals
                .slice(0, index + 1)
                .reduce((accumulator, current) => accumulator + current, 0)
        ),
    );
}

function build(note: Note, scaleKind: ScaleKind): readonly Note[] {
    return getScaleNotes(scaleKind)
        .map((relativeNumber) => relativeNumber + note)
        .map((noteRelativeNumber) => (noteRelativeNumber % 12));
}

export const scaleBus = {
    build,
} as const;
