import { Container, Title, OptionsContainer, Option } from './Selector.styles';

type props = {
    options: string[];
    onChange: (option: number) => void;
    selected: number;
    title: string;
    mode?: 'square' | 'rectangle';
};

export function Selector({
    options,
    onChange,
    selected,
    title,
    mode = 'rectangle'
}: props) {
    return (
        <Container>
            <Title>{title}</Title>
            <OptionsContainer>
                {options.map((option, index) => (
                    <Option
                        key={option}
                        selected={index === selected}
                        mode={mode}
                        onClick={() => onChange(index)}
                    >
                        <span>{option}</span>
                    </Option>
                ))}
            </OptionsContainer>
        </Container>
    );
}
