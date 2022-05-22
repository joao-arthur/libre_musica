type props<T extends string | number> = {
    name: string;
    readonly options: readonly {
        readonly value: T;
        readonly label: string;
    }[];
    value: T;
    onChange: (newValue: T) => void;
};

export function SelectInput<T extends string | number>({
    name,
    options,
    value,
    onChange,
}: props<T>) {
    return (
        <select
            className='w-28 bg-white h-14 px-2 py-1 outline-none border border-transparent focus:border-gray-300 rounded'
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
