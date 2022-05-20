import { ReactNode } from 'react';
import { Sidebar } from '../../components/Sidebar';

type props = {
    children: ReactNode;
};

export function BasePage({ children }: props) {
    return (
        <>
            <header className='text-center bg-gray-400'>
                <h1>app title</h1>
            </header>
            <div className='flex'>
                <Sidebar />
                <div className='block flex-1-0-auto'>{children}</div>
            </div>
            <footer>nothing to see here (yet)</footer>
        </>
    );
}
