import type { JSX } from "react";
import type { Options } from "@/lib/options";

type Props<T extends string | number> = {
    readonly name: string;
    readonly options: Options<T>;
    readonly value: T;
    readonly onChange: (newValue: T) => void;
};

export function SelectInput<T extends string | number>({
    name,
    options,
    value,
    onChange,
}: Props<T>): JSX.Element {
    return (
        <select
            className="w-28 bg-white h-12 px-2 py-1 outline-none border border-transparent focus:border-gray-300 rounded"
            name={name}
            value={value}
            onChange={(e) => {
                const selected = options.find((o) => String(o.value) === String(e.target.value))
                    ?.value;
                if (selected) {
                    onChange(selected);
                }
            }}
        >
            {options.map(({ value, label }) => (
                <option value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
}
