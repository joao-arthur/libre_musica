type props = {
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
};

export function NumberInput({ value, min, max, onChange }: props) {
    function handleOnChange(newValue: string) {
        const maybeValue = Number(newValue);
        if (!maybeValue) return;
        if (maybeValue > max) return;
        if (maybeValue < min) return;
        onChange(maybeValue);
    }

    return (
        <input
            type='number'
            className='w-28 h-14 px-2 py-1 outline-none border border-transparent focus:border-gray-300 rounded'
            min={min}
            max={max}
            onChange={e => handleOnChange(e.target.value)}
            value={value}
        />
    );
}
