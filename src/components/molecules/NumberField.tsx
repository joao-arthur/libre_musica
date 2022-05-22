import { InputTitle } from '../atoms/InputTitle';
import { NumberInput } from '../atoms/NumberInput';

type props<T extends number> = {
    title: string;
    min: number;
    max: number;
    value: T;
    onChange: (value: T) => void;
};

export function NumberField<T extends number>({
    value,
    min,
    max,
    onChange,
    title,
}: props<T>) {
    return (
        <div className='flex-auto'>
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
