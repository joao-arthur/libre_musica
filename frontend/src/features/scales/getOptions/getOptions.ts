import { scale } from "../scale";

export function getOptions() {
    return Object.values(scale).map((currentScale) => ({
        label: currentScale.label,
        value: currentScale.name,
    }));
}
