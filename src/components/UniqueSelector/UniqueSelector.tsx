import React from 'react';
import * as Styles from './UniqueSelector.styles';

interface props<T> {
    options: T[];
    onChange: (option: T) => void;
    selected: T;
    title: string;
}

export default function UniqueSelector<T>({
    options,
    onChange,
    selected,
    title
}: props<T>) {
    return (
        <>
            <h3>{title}</h3>
            <Styles.Container>
                {options.map((option, index) => (
                    <Styles.Option
                        key={index}
                        selected={option === selected}
                        onClick={() => onChange(option)}
                    >
                        <Styles.Label>{option}</Styles.Label>
                    </Styles.Option>
                ))}
            </Styles.Container>
        </>
    );
}
