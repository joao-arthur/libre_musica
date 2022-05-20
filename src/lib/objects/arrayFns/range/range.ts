export function range(size: number) {
    return Array(size)
        .fill(undefined)
        .map((_, i) => i);
}
