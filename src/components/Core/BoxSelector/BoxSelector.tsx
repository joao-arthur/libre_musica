import React from 'react';
import * as Styles from './BoxSelector.styles';

interface props<T> {
    options: T[];
    onChange: (option: T) => void;
    selected: T;
    title: string;
}

export default function BoxSelector<T>({
    options,
    onChange,
    selected,
    title
}: props<T>) {
    return (
        <Styles.Container>
            <Styles.Title>{title}</Styles.Title>
            <Styles.OptionsContainer>
                {options.map((option, index) => (
                    <Styles.Option
                        key={index}
                        selected={option === selected}
                        onClick={() => onChange(option)}
                    >
                        <span>{option}</span>
                    </Styles.Option>
                ))}
            </Styles.OptionsContainer>
        </Styles.Container>
    );
}
