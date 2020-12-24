import React, { ReactChild } from 'react';
import Link from './Link.styles';

interface props {
    to: string;
    children: ReactChild;
    className?: string;
}

export default ({ to, children, className }: props) => (
    <Link to={to} className={className}>
        {children}
    </Link>
);
