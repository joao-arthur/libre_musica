import { instrument } from "../instrument";

type tuningOptions =
    | {
        selectedInstrument: "guitar";
        numberOfStrings: 6 | 7;
    }
    | {
        selectedInstrument: "bass";
        numberOfStrings: 4 | 5 | 6;
    };

export function getTuneOptions({
    selectedInstrument,
    numberOfStrings,
}: tuningOptions) {
    function getTunings() {
        switch (selectedInstrument) {
            case "bass":
                return instrument.bass.tunings[numberOfStrings];
            case "guitar":
                return instrument.guitar.tunings[numberOfStrings];
        }
    }

    return Object.keys(getTunings()).map((tuning) => ({
        label: tuning,
        value: tuning,
    }));
}
