import type { JSX } from "react";
import type { Options } from "@/lib/options";
import { InputTitle } from "../atoms/InputTitle";
import { SelectInput } from "../atoms/SelectInput";

type Props<T extends string | number> = {
    readonly title: string;
    readonly name: string;
    readonly options: Options<T>;
    readonly value: T;
    readonly onChange: (newValue: T) => void;
};

export function SelectField<T extends string | number>({
    title,
    name,
    options,
    value,
    onChange,
}: Props<T>): JSX.Element {
    return (
        <div className="flex-auto">
            <InputTitle>{title}</InputTitle>
            <SelectInput
                name={name}
                options={options}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
