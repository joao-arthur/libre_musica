import styled from 'styled-components';

export const Options = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
    padding: 2px;
    justify-content: space-around;
`;

export const Option = styled.div`
    width: 80px;
    height: 80px;
    font-size: 20px;
    text-align: center;

    background-color: darkblue;
    color: white;

    &:hover {
        background-color: yellow;
    }
`;

export const Text = styled.span`
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
`;
