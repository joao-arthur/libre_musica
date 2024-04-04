export const accident = {
    sharp: "♯",
    flat: "♭",
} as const;

export type accidentType = typeof accident[keyof typeof accident];
