import React from 'react';
import * as Style from './UniqueSelector.styles';

interface props<T> {
    options: T[];
    onChange: (option: T) => void;
    selected: T;
}

export default function UniqueSelector<T>({
    options,
    onChange,
    selected
}: props<T>) {
    return (
        <Style.Options>
            {options.map((option, index) => (
                <Style.Option
                    key={index}
                    selected={option === selected}
                    onClick={() => onChange(option)}
                >
                    <Style.Label>{option}</Style.Label>
                </Style.Option>
            ))}
        </Style.Options>
    );
}
