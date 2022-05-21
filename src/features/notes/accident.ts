export const accident = {
    sharp: '♯',
    bemol: '♭',
} as const;

export type accidentType = typeof accident[keyof typeof accident];
