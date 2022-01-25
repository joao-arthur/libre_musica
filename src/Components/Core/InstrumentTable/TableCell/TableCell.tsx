import { Container, Label, Box } from './TableCell.styles';

interface Props {
    text: string;
    size: number;
    active: boolean;
    onClick: () => void;
}

const TableCell = ({ text, size, active, onClick }: Props) => (
    <Container size={size} onClick={onClick}>
        <Box active={active}>
            <Label>{text}</Label>
        </Box>
    </Container>
);

export default TableCell;
