import styled from 'styled-components';

interface boxProps {
    size: number;
}

interface activeProps {
    active: boolean;
}

export const DayBox = styled.td<boxProps>`
    width: calc(100% / ${({ size }) => (size ? size + 1 : 1)});
    height: 3.5rem;
    cursor: pointer;
    border: 1px solid black;
    text-align: center;
`;

export const ActiveBox = styled.div<activeProps>`
    border: none;
    width: 3rem;
    height: 3rem;
    display: inline-flex;
    border-radius: 100%;
    background-color: ${({ active }) => (active ? '#ff8a65' : '#80d6ff')};
`;

export const DayLabel = styled.p`
    text-align: center;
    margin: auto;
`;
