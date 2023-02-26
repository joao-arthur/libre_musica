import { bass } from './bass';
import { guitar } from './guitar';

export const instrument = {
    bass,
    guitar,
} as const;

export type instrumentNames = keyof typeof instrument;
