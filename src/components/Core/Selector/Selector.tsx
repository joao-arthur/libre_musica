import React from 'react';

interface props {
    options: string[];
    onChange: (option: string) => void;
    selected: string;
    title: string;
}

export default function BoxSelector({
    options,
    onChange,
    selected,
    title
}: props) {
    return (
        <div>
            <h3>{title}</h3>
            <select
                name={title}
                value={selected}
                onChange={e => onChange(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        <span>{option}</span>
                    </option>
                ))}
            </select>
        </div>
    );
}
