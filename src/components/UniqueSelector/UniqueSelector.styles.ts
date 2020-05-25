import styled from 'styled-components';
import styles from '../../core/styles';

interface optionProps {
    selected: boolean;
}

export const Container = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
    padding: 2px;
    justify-content: space-around;
`;

export const Option = styled.div<optionProps>`
    width: 55px;
    height: 55px;
    font-size: 1em;
    text-align: center;
    background-color: ${({ selected }) =>
        selected ? styles.dark : styles.primary};
    color: white;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        font-size: 1.2em;
    }
`;

export const Label = styled.span``;
