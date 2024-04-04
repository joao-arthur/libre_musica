type props<T extends number> = {
    min: number;
    max: number;
    value: T;
    onChange: (newValue: T) => void;
};

export function NumberInput<T extends number>({
    value,
    min,
    max,
    onChange,
}: props<T>) {
    function handleOnChange(newValue: number) {
        const maybeValue: T = newValue as any;
        if (!maybeValue) return;
        if (maybeValue > max) return;
        if (maybeValue < min) return;
        onChange(maybeValue);
    }

    return (
        <input
            type="number"
            className="w-28 h-14 px-2 py-1 outline-none border border-transparent focus:border-gray-300 rounded"
            min={min}
            max={max}
            onChange={(e) => handleOnChange(Number(e.target.value))}
            value={value}
        />
    );
}
