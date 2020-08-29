import React from 'react';
import { DayBox, DayLabel, InvisibleDayBox } from './Cell.styles';

interface props {
    dia: number;
}

export default function cell({ dia }: props) {
    if (dia)
        return (
            <DayBox
                onClick={() => {
                    //console.log(props.children)
                }}
            >
                <DayLabel>{dia}</DayLabel>
            </DayBox>
        );

    return <InvisibleDayBox />;
}
