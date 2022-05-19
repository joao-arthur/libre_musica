import { ReactElement } from 'react';
import { Sidebar } from '../../components/Sidebar';
import {
    Header,
    HeaderTitle,
    ContentContainer,
    ChildrenContainer,
    Footer
} from './BasePage.styles';

type props = {
    children: ReactElement;
};

export function BasePage({ children }: props) {
    return (
        <>
            <Header>
                <HeaderTitle>título</HeaderTitle>
            </Header>
            <ContentContainer>
                <Sidebar />
                <ChildrenContainer>{children}</ChildrenContainer>
            </ContentContainer>
            <Footer>nothing to see here (yet)</Footer>
        </>
    );
}
