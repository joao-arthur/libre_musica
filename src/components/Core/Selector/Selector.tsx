import React from 'react';
import * as Styles from './Selector.styles';

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
        <Styles.Container>
            <Styles.Title>{title}</Styles.Title>
            <select
                name={title}
                value={selected}
                onChange={e => onChange(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </Styles.Container>
    );
}
