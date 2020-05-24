import React from 'react';
import * as Style from './UniqueSelector.styles';

interface props<T> {
    options: T[];
    onChange: (option: T) => void;
}

export default function UniqueSelector<T>({ options, onChange }: props<T>) {
    return (
        <Style.Options>
            {options.map((option, index) => (
                <Style.Option key={index} onClick={() => onChange(option)}>
                    <Style.Text>{option}</Style.Text>
                </Style.Option>
            ))}
        </Style.Options>
    );
}
