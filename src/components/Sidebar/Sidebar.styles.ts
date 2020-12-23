import styled from 'styled-components';
import Link from '../Core/Link';

export const Container = styled.div`
    height: 100vh;
    width: 20vw;
    border-right: 1px solid gray;
    box-shadow: 0px 0px 2px;
    overflow: hidden;
`;

export const Item = styled.div`
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    position:relative;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 2px;
        z-index: 1;
    }
`;

export const CustomLink = styled(Link)`
    padding: 20px;
    padding-left: 50px;
    font-size:20px; 
    width:100%;
`