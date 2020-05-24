import styled from 'styled-components';
import styles from '../../core/styles';

export const Button = styled.button`
    width: 2rem;
    height: 2rem;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    background-color: unset;
    color: white;
`;

export const Table = styled.table`
    width: 100%;
    background-color: ${styles.lightGrey};
    border-collapse: collapse;
`;
