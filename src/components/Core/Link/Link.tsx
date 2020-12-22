import React, { ReactChild } from 'react';
import Link from './Link.styled';

interface props {
    to: string;
    children: ReactChild;
}

export default ({ to, children }: props) => <Link to={to}>{children}</Link>;
