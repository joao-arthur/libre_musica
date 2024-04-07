import type { JSX } from "react";

type Props<T extends string | number> = {
    readonly name: string;
    readonly options: readonly {
        readonly value: T;
        readonly label: string;
    }[];
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
            className="w-28 bg-white h-14 px-2 py-1 outline-none border border-transparent focus:border-gray-300 rounded"
            name={name}
            value={value}
        >
            {options.map(({ value, label }) => (
                <option onClick={() => onChange(value)} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
}
