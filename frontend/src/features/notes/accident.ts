export const accident = {
    sharp: "♯",
    flat: "♭",
} as const;

export type Accident = typeof accident[keyof typeof accident];
