import React from 'react';
import { Container, Label, Box } from './TableCell.styles';

interface props {
    text: string;
    size: number;
    active: boolean;
}

export default ({ text, size, active }: props) => (
    <Container size={size} onClick={() => console.log(text)}>
        <Box active={active}>
            <Label>{text}</Label>
        </Box>
    </Container>
);
