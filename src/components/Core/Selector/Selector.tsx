import React from 'react';
import * as Styles from './Selector.styles';

interface Option {
    name: string;
    value: number;
}

interface props {
    options: Option[];
    onChange: (option: number) => void;
    selected: number;
    title: string;
    mode?: 'square' | 'rectangle';
}

export default ({
    options,
    onChange,
    selected,
    title,
    mode = 'rectangle'
}: props) => (
    <Styles.Container>
        <Styles.Title>{title}</Styles.Title>
        <Styles.OptionsContainer>
            {options.map(({ name, value }, index) => (
                <Styles.Option
                    key={index}
                    selected={value === selected}
                    mode={mode}
                    onClick={() => onChange(value)}
                >
                    <span>{name}</span>
                </Styles.Option>
            ))}
        </Styles.OptionsContainer>
    </Styles.Container>
);
