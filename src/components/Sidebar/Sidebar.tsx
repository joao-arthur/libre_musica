import React from 'react';
import { Container, Item } from './Sidebar.styles';
import Link from '../Core/Link';

export default () => (
    <Container>
        <Item>
            <Link to='/about'>instruments</Link>
        </Item>
        <Item>
            <Link to='/about'>calendar</Link>
        </Item>
        <Item>
            <Link to='/about'>calendar</Link>
        </Item>
    </Container>
);
