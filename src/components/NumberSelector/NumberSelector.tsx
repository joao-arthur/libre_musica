import React from 'react';

interface props {
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
    title: string;
}

export default ({ value, min, max, onChange, title }: props) => (
    <>
        <h3>{title}</h3>
        <div>{value}</div>
        <button disabled={value >= max} onClick={() => onChange(value + 1)}>
            +
        </button>
        <button disabled={value <= min} onClick={() => onChange(value - 1)}>
            -
        </button>
    </>
);
