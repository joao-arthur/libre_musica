import React, { ReactChild } from 'react';
import {
    Header,
    HeaderTitle,
    ContentContainer,
    ChildrenContainer,
    Footer
} from './BasePage.styles';
import Sidebar from '../../Components/Sidebar';

interface props {
    children: ReactChild;
}

export default ({ children }: props) => (
    <>
        <Header>
            <HeaderTitle>título</HeaderTitle>
        </Header>
        <ContentContainer>
            <Sidebar />
            <ChildrenContainer>{children}</ChildrenContainer>
        </ContentContainer>
        <Footer>muito shoow</Footer>
    </>
);
