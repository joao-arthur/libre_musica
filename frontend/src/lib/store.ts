import { writable } from 'svelte/store';
import type { Instrument, Tuning } from './core/instrument';
import { Note } from './core/note';
import type { ScaleKind } from './core/scale';

type Store = {
    readonly instrument: Instrument,
    readonly root: Note,
    readonly numberOfFrets: number,
    readonly numberOfStrings: number   ,
     readonly scaleKind: ScaleKind,
    readonly tuning: Tuning,
}

function createEventsStore() {
    const initial = {
        instrument: "bass",
        root: Note.C,
        numberOfFrets: 11,
        numberOfStrings: 4,
        scaleKind: "diatonic",
        tuning: "standard",
    } as const;

    const {
         subscribe,
         set,
         update
    } = writable<Store>(initial);


    return {
        setInstrument: () => {},
        setRoot: () => {},
        setNumberOfFrets: () => {},
        setNumberOfStrings: () => {},
        setScaleKind: () => {},
        setTuning: () => {}
    };
}

export const events = createEventsStore();