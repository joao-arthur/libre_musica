import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type props = {
    to: string;
    children: ReactNode;
    className?: string;
};

export function AppLink({ to, children, className }: props) {
    return (
        <Link
            to={to}
            className={classNames('no-underline text-black', className)}
        >
            {children}
        </Link>
    );
}
