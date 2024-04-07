import { expect, test } from "vitest";
import { reorder } from "./reorder";
import { range } from "./range";

describe("reorder", () => {
    it("should reorder array", () => {
        expect(reorder([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
        expect(reorder([4, 5, 6, 7, 8], 2)).toEqual([6, 7, 8, 4, 5]);
        expect(reorder([9, 8, 7], 3)).toEqual([9, 8, 7]);
        expect(reorder([1, 2], 1)).toEqual([2, 1]);
    });
});

describe("reorder", () => {
    it("should reorder array", () => {
        expect(range(0)).toEqual([]);
        expect(range(1)).toEqual([0]);
        expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    });
});
