import { NumberInput } from '../../atoms/NumberInput';

type props = {
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
    title: string;
};

export function NumberSelector({ value, min, max, onChange, title }: props) {
    return (
        <div className='flex-auto'>
            <h3 className='text-center'>{title}</h3>
            <NumberInput
                min={min}
                max={max}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
