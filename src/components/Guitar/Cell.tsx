import React from 'react';

import { Box, Label, ActiveBox } from './Cell.styles';

interface props {
    text: string;
    size: number;
    active: boolean;
}

export default ({ text, size, active }: props) => (
    <Box size={size}>
        <ActiveBox active={active}>
            <Label>{text}</Label>
        </ActiveBox>
    </Box>
);
