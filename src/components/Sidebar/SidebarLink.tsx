import { ReactNode } from 'react';
import { AppLink } from '../core/AppLink';

type props = {
    to: string;
    children: ReactNode;
};

export function SidebarLink({ to, children }: props) {
    return (
        <AppLink to={to} className='p-5 w-full text-xl'>
            {children}
        </AppLink>
    );
}
