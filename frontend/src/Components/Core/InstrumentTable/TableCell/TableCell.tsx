import React from 'react';
import { Container, Label, Box } from './TableCell.styles';

interface props {
    text: string;
    size: number;
    active: boolean;
    onClick: () => void;
}

export default ({ text, size, active, onClick }: props) => (
    <Container size={size} onClick={onClick}>
        <Box active={active}>
            <Label>{text}</Label>
        </Box>
    </Container>
);
