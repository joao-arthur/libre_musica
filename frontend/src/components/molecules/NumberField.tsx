import type { JSX } from "react";
import { InputTitle } from "../atoms/InputTitle";
import { NumberInput } from "../atoms/NumberInput";

type Props<T extends number> = {
    readonly title: string;
    readonly min: number;
    readonly max: number;
    readonly value: T;
    readonly onChange: (value: T) => void;
};

export function NumberField<T extends number>({
    value,
    min,
    max,
    onChange,
    title,
}: Props<T>): JSX.Element {
    return (
        <div className="flex-auto">
            <InputTitle>{title}</InputTitle>
            <NumberInput
                min={min}
                max={max}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
