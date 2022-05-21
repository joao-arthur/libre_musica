import { ChangeEvent } from 'react';
import { InputButton } from './InputButton';

type props = {
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
    title: string;
};

export function NumberSelector({
    value, min, max, onChange, title,
}: props) {
    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        const maybeValue = Number(e.target.value);
        if (!maybeValue) return;
        if (maybeValue > max) return;
        if (maybeValue < min) return;
        onChange(maybeValue);
    }

    return (
        <div className='flex-auto'>
            <h3 className='text-center'>{title}</h3>
            <input
                type='number'
                className='w-28 h-14 mx-1 p-1 outline-none border border-transparent focus:border-gray-300 rounded'
                min={min}
                max={max}
                onChange={handleOnChange}
                value={value}
            />
            <InputButton
                disabled={value >= max}
                onClick={() => onChange(value + 1)}
            >
                +
            </InputButton>
            <InputButton
                disabled={value <= min}
                onClick={() => onChange(value - 1)}
            >
                -
            </InputButton>
        </div>
    );
}
