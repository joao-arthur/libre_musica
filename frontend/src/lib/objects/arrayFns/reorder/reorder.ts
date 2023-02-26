export function reorder<T = unknown>(array: T[], index: number) {
    return array.slice(index).concat(array.slice(0, index));
}
