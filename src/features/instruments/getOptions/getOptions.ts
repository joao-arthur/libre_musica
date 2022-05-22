import { instrument } from '../instrument';

export function getOptions() {
    return Object.entries(instrument).map(
        ([instrumentName, instrumentValue]) => ({
            label: instrumentValue.label,
            value: instrumentName,
        }),
    );
}
