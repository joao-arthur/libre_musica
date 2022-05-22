import { ReactNode } from 'react';

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
                <div className='block flex-1-0-auto'>{children}</div>
            </div>
        </>
    );
}
