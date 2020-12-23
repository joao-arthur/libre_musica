import React, { ReactChild } from 'react';
import Sidebar from '../../Components/Sidebar';

interface props {
    children: ReactChild;
}

export default ({ children }: props) => (
    <>
        <Sidebar />
        <div style={{ display: 'block' }}>{children}</div>
    </>
);
