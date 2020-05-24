import styled from 'styled-components';
import styles from '../../core/styles';

interface optionProps {
    selected: boolean;
}

export const Options = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
    padding: 2px;
    justify-content: space-around;
`;

export const Option = styled.div<optionProps>`
    width: 80px;
    height: 80px;
    font-size: 20px;
    text-align: center;
    background-color: ${({ selected }) =>
        selected ? styles.dark : styles.primary};
    color: white;
    cursor: pointer;

    &:hover {
        font-size: 1.65em;
    }
`;

export const Label = styled.span`
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
`;
