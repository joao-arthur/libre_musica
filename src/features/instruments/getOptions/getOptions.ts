import { instrument } from '../instrument';

export function getOptions() {
    return Object.values(instrument).map(instrumentValue => ({
        label: instrumentValue.label,
        value: instrumentValue.name,
    }));
}
