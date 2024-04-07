function reorder<T = unknown>(array: T[], index: number) {
    return array.slice(index).concat(array.slice(0, index));
}

function range(size: number) {
    return Array(size)
        .fill(undefined)
        .map((_, i) => i);
}

export const arrayFns = {
    reorder,
    range,
} as const;
