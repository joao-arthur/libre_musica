import { Container, Label, Box } from './TableCell.styles';

type props = {
    text: string;
    size: number;
    active: boolean;
    onClick: () => void;
};

export function TableCell({ text, size, active, onClick }: props) {
    return (
        <Container size={size} onClick={onClick}>
            <Box active={active}>
                <Label>{text}</Label>
            </Box>
        </Container>
    );
}
