import type { Note } from "./note";
import { noteBusiness } from "./note";

export enum intervals {
    semitone = 1,
    tone,
    toneAndHalf,
    twoTones,
    twoTonesAndHalf,
    threeTones,
    threeTonesAndHalf,
    fourTones,
    fourTonesAndHalf,
    fiveTones,
    fiveTonesAndHalf,
}

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

function getScaleNoteNumbers(scaleKind: ScaleName) {
    const currentScaleIntervals = scale[scaleKind].intervals;
    return [0].concat(
        currentScaleIntervals.map((_, index) =>
            currentScaleIntervals
                .slice(0, index + 1)
                .reduce((accumulator, current) => accumulator + current, 0)
        ),
    );
}

function getOptions() {
    return Object.values(scale).map((currentScale) => ({
        label: currentScale.label,
        value: currentScale.name,
    }));
}

function getNoteScale(note: Note, scaleKind: ScaleName) {
    return getScaleNoteNumbers(scaleKind)
        .map((relativeNumber) => relativeNumber + note.number)
        .map(
            (noteRelativeNumber) => (noteRelativeNumber % 12) as Note["number"],
        )
        .map(noteBusiness.getNoteByNumber);
}

export const scaleBusiness = {
    getOptions,
    getNoteScale,
};
