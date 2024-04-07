import { expect, test } from "vitest";
import { arrayFns } from "./arrayFns";

test("arrayFns.reorder", () => {
    expect(arrayFns.reorder([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    expect(arrayFns.reorder([4, 5, 6, 7, 8], 2)).toEqual([6, 7, 8, 4, 5]);
    expect(arrayFns.reorder([9, 8, 7], 3)).toEqual([9, 8, 7]);
    expect(arrayFns.reorder([1, 2], 1)).toEqual([2, 1]);
});

test("arrayFns.reorder", () => {
    expect(arrayFns.range(0)).toEqual([]);
    expect(arrayFns.range(1)).toEqual([0]);
    expect(arrayFns.range(5)).toEqual([0, 1, 2, 3, 4]);
});
