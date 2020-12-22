import React from 'react';
import { Container, Item } from './Sidebar.styles';
import Link from '../Core/Link';

export default () => (
    <Container>
        <Item>
            <Link to='/about'>instruments</Link>
        </Item>
        <Item>
            <Link to='/users'>calendar</Link>
        </Item>
        <Item>
            <Link to='/users'>calendar</Link>
        </Item>
    </Container>
);
