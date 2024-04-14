import type { JSX } from "react";

type Props<T extends number> = {
    readonly min: number;
    readonly max: number;
    readonly value: T;
    readonly onChange: (newValue: T) => void;
};

export function NumberInput<T extends number>({
    value,
    min,
    max,
    onChange,
}: Props<T>): JSX.Element {
    function handleOnChange(newValue: number) {
        const maybeValue: T = newValue as any;
        if (!maybeValue) return;
        if (maybeValue > max) return;
        if (maybeValue < min) return;
        onChange(maybeValue);
    }

    return (
        <input
            type="number"
            className="w-28 h-12 px-2 py-1 outline-none border border-transparent focus:border-gray-300 rounded"
            min={min}
            max={max}
            onChange={(e) => handleOnChange(Number(e.target.value))}
            value={value}
        />
    );
}
