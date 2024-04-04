import { InputTitle } from "../atoms/InputTitle";
import { SelectInput } from "../atoms/SelectInput";

type props<T extends string | number> = {
    title: string;
    name: string;
    readonly options: readonly {
        readonly value: T;
        readonly label: string;
    }[];
    value: T;
    onChange: (newValue: T) => void;
};

export function SelectField<T extends string | number>({
    title,
    name,
    options,
    value,
    onChange,
}: props<T>) {
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
