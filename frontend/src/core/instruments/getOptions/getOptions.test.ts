import { expect, test } from "vitest";
import { getOptions } from "./getOptions";

test("getOptions", () => {
    expect(getOptions()).toEqual([
        { label: "Bass", value: "bass" },
        { label: "Guitar", value: "guitar" },
    ]);
});
