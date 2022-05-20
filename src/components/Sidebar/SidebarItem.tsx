import { ReactNode } from 'react';

type props = {
    children: ReactNode;
};

export function SidebarItem({ children }: props) {
    return (
        <div className='flex items-center relative cursor-pointer bg-grey-light hover:bg-grey'>
            {children}
        </div>
    );
}
