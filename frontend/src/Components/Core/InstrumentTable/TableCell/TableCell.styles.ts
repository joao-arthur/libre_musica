import styled from 'styled-components';

interface containerProps {
    size: number;
}

interface boxProps {
    active: boolean;
}

export const Container = styled.td<containerProps>`
    width: calc(100% / ${({ size }) => (size ? size + 1 : 1)});
    height: 3.0rem;
    cursor: pointer;
    border: 1px solid var(--darkGrey);
    text-align: center;
`;

export const Box = styled.div<boxProps>`
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    display: inline-flex;
    border-radius: 100%;
    background-color: ${({ active }) =>
        active ? 'var(--dark)' : 'var(--light)'};
    color: white;
`;

export const Label = styled.p`
    text-align: center;
    margin: auto;
`;
