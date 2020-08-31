import React from 'react';
import * as Styles from './NumberSelector.styles';

interface props {
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
    title: string;
}

export default ({ value, min, max, onChange, title }: props) => (
    <Styles.Container>
        <Styles.Title>{title}</Styles.Title>
        <div>{value}</div>
        <button disabled={value >= max} onClick={() => onChange(value + 1)}>
            +
        </button>
        <button disabled={value <= min} onClick={() => onChange(value - 1)}>
            -
        </button>
    </Styles.Container>
);
