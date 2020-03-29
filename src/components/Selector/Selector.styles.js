import styled from 'styled-components';

export const Options = styled.div`
    height: 5rem;
    width: 500px;
    overflow: auto;
`;

export const Option = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 0;

    &:hover {
        background-color: yellow;
    }
`;
