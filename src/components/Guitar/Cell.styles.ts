import styled from 'styled-components';
import styles from '../../core/styles';

interface containerProps {
    size: number;
}

interface boxProps {
    active: boolean;
}

export const Container = styled.td<containerProps>`
    width: calc(100% / ${({ size }) => (size ? size + 1 : 1)});
    height: 3.5rem;
    cursor: pointer;
    border: 1px solid ${styles.darkGrey};
    text-align: center;
`;

export const Box = styled.div<boxProps>`
    border: none;
    width: 3rem;
    height: 3rem;
    display: inline-flex;
    border-radius: 100%;
    background-color: ${({ active }) => (active ? styles.dark : styles.light)};
`;

export const Label = styled.p`
    text-align: center;
    margin: auto;
`;
