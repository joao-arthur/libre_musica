import React from 'react';

import { DayBox, DayLabel, ActiveBox } from './Cell.styles';

interface props {
    text: string;
    size: number;
    active: boolean;
}

export default function cell({ text, size, active }: props) {
    return (
        <DayBox size={size}>
            <ActiveBox active={active}>
                <DayLabel>{text}</DayLabel>
            </ActiveBox>
        </DayBox>
    );
}
