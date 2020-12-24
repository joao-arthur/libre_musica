import React from 'react';
import { Container, Item, CustomLink } from './Sidebar.styles';

export default () => (
    <div style={{ display: 'flex' }}>
        <Container>
            <Item>
                <CustomLink to='/scales'>scales</CustomLink>
            </Item>
            <Item>
                <CustomLink to='/signup'>signup</CustomLink>
            </Item>
            <Item>
                <CustomLink to='/signin'>signin</CustomLink>
            </Item>
            <Item>
                <CustomLink to='/sample'>sample</CustomLink>
            </Item>
            <Item>
                <CustomLink to='/sample'>sample</CustomLink>
            </Item>
            <Item>
                <CustomLink to='/sample'>sample</CustomLink>
            </Item>
            <Item>
                <CustomLink to='/sample'>sample</CustomLink>
            </Item>
            <Item>
                <CustomLink to='/sample'>sample</CustomLink>
            </Item>
        </Container>
    </div>
);
