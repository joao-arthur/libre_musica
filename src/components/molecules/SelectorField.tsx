import { InputTitle } from '../atoms/InputTitle';
import { SelectInput } from '../atoms/SelectInput';

type props = {
    title: string;
    name: string;
    readonly options: readonly {
        readonly value: string;
        readonly label: string;
    }[];
    value: string;
    onChange: (newValue: string) => void;
};

export function SelectorField({
    title,
    name,
    options,
    value,
    onChange,
}: props) {
    return (
        <div className='flex-auto'>
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
