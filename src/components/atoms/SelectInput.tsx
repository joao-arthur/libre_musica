type props = {
    name: string;
    readonly options: readonly {
        readonly value: string;
        readonly label: string;
    }[];
    value: string;
    onChange: (newValue: string) => void;
};

export function SelectInput({ name, options, value, onChange }: props) {
    return (
        <select
            className='w-28 bg-white h-14 mx-1 p-1 outline-none border border-transparent focus:border-gray-300 rounded'
            name={name}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {options.map(({ value, label }) => (
                <option value={value}>{label}</option>
            ))}
        </select>
    );
}
