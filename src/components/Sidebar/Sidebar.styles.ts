import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 20vw;
    border-right: 1px solid gray;
    box-shadow: 0px 0px 2px;
    overflow: hidden;
    cursor: pointer;
`;

export const Item = styled.div`
    text-align: center;
    height: 50px;
    font-size:20px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    position:relative;
    padding-left: 15px;

    &:hover {
        box-shadow: 0px 0px 2px;
        z-index: 1;
    }
`;