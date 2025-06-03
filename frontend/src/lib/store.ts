import { writable } from "svelte/store";
import type { Instrument, Tuning } from "./core/instrument";
import { Note } from "./core/note";
import type { ScaleKind } from "./core/scale";
import { getDefaultNumberOfStrings } from "./core/options";

type Store = {
    readonly instrument: Instrument;
    readonly root: Note;
    readonly numberOfFrets: number;
    readonly numberOfStrings: number;
    readonly scaleKind: ScaleKind;
    readonly tuning: Tuning;
};

function createEventsStore() {
    const initialValue: Store = {
        instrument: "bass",
        root: Note.C,
        numberOfFrets: 11,
        numberOfStrings: 4,
        scaleKind: "diatonic",
        tuning: "standard",
    };
    const instrumentStore = writable<Store>(initialValue);

    return {
        store: instrumentStore,
        setInstrument: (instrument: Instrument) => {
            instrumentStore.update((value) => ({
                ...value,
                instrument,
                numberOfStrings: getDefaultNumberOfStrings(instrument),
                tuning: "standard",
            }));
        },
        setRoot: (root: Note) => {
            instrumentStore.update((value) => ({ ...value, root }));
        },
        setNumberOfFrets: (numberOfFrets: number) => {
            instrumentStore.update((value) => ({ ...value, numberOfFrets }));
        },
        setNumberOfStrings: (numberOfStrings: number) => {
            instrumentStore.update((value) => ({ 
                ...value, 
                numberOfStrings,
                tuning: "standard",
            }));
        },
        setScaleKind: (scaleKind: ScaleKind) => {
            instrumentStore.update((value) => ({ ...value, scaleKind }));
        },
        setTuning: (tuning: Tuning) => {
            instrumentStore.update((value) => ({ ...value, tuning }));
        },
    };
}

export const instrumentTable = createEventsStore();
