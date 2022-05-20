import { ReactNode } from 'react';

type props = {
    children: ReactNode;
};

export function TableFooterCell({ children }: props) {
    return <div>{children}</div>;
}
