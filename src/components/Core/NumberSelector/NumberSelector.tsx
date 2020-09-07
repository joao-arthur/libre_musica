import React, { ChangeEvent } from 'react';
import * as Styles from './NumberSelector.styles';

interface props {
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
    title: string;
}

export default ({ value, min, max, onChange, title }: props) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const maybeValue = Number(e.target.value);
        if (!maybeValue) return;
        if (maybeValue > max) return;
        if (maybeValue < min) return;
        onChange(Number(maybeValue));
    };

    return (
        <Styles.Container>
            <Styles.Title>{title}</Styles.Title>
            <Styles.Input
                type='number'
                min={min}
                max={max}
                required
                onChange={handleInputChange}
                value={value}
            />
            <Styles.Button
                disabled={value >= max}
                onClick={() => onChange(value + 1)}
            >
                +
            </Styles.Button>
            <Styles.Button
                disabled={value <= min}
                onClick={() => onChange(value - 1)}
            >
                -
            </Styles.Button>
        </Styles.Container>
    );
};
