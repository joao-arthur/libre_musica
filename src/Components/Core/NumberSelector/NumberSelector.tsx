import { ChangeEvent } from 'react';
import { Container, Title, Input, Button } from './NumberSelector.styles';

type props = {
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
    title: string;
};

export function NumberSelector({ value, min, max, onChange, title }: props) {
    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const maybeValue = Number(e.target.value);
        if (!maybeValue) return;
        if (maybeValue > max) return;
        if (maybeValue < min) return;
        onChange(maybeValue);
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Input
                type='number'
                min={min}
                max={max}
                required
                onChange={handleInputChange}
                value={value}
            />
            <Button disabled={value >= max} onClick={() => onChange(value + 1)}>
                +
            </Button>
            <Button disabled={value <= min} onClick={() => onChange(value - 1)}>
                -
            </Button>
        </Container>
    );
}
