import styled from 'styled-components';

interface optionProps {
    selected: boolean;
    mode: 'square' | 'rectangle';
}

export const Container = styled.div`
    flex: auto;
`;

export const Title = styled.h3`
    text-align: center;
`;

export const OptionsContainer = styled.div`
    display: flex;
    padding: 2px 0px;
    justify-content: space-around;
`;

export const Option = styled.button<optionProps>`
    border: none;
    outline: none;
    border-radius: 5px;
    height: 55px;
    width: ${({ mode }) => (mode === 'square' ? '55px' : '10rem')};
    font-size: 1em;
    text-align: center;
    background-color: ${({ selected }) =>
        selected ? 'var(--dark)' : 'var(--primary)'};
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease;
    &:hover {
        font-size: 1.2em;
    }
`;
