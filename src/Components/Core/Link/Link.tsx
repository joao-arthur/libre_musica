import { ReactNode } from 'react';
import { CustomLink } from './Link.styles';

type props = {
    to: string;
    children: ReactNode;
    className?: string;
};

export function Link({ to, children, className }: props) {
    return (
        <CustomLink to={to} className={className}>
            {children}
        </CustomLink>
    );
}
