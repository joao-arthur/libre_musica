import { intervals } from "../intervals";

const { semitone, tone } = intervals;

export const diatonic = {
    name: "diatonic",
    label: "Diatonic",
    intervals: [tone, tone, semitone, tone, tone, tone],
} as const;
