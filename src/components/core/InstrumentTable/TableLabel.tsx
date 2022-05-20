import { ReactNode } from 'react';

type props = {
    children: ReactNode;
};

export function TableLabel({ children }: props) {
    return <p className='text-center m-auto'>{children}</p>;
}
