import * as Styles from './Selector.styles';

interface Props {
    options: string[];
    onChange: (option: number) => void;
    selected: number;
    title: string;
    mode?: 'square' | 'rectangle';
}

const Selector = ({
    options,
    onChange,
    selected,
    title,
    mode = 'rectangle'
}: Props) => (
    <Styles.Container>
        <Styles.Title>{title}</Styles.Title>
        <Styles.OptionsContainer>
            {options.map((option, index) => (
                <Styles.Option
                    key={option}
                    selected={index === selected}
                    mode={mode}
                    onClick={() => onChange(index)}
                >
                    <span>{option}</span>
                </Styles.Option>
            ))}
        </Styles.OptionsContainer>
    </Styles.Container>
);

export default Selector;
