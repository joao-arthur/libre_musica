import { ReactElement } from 'react';
import {
    Header,
    HeaderTitle,
    ContentContainer,
    ChildrenContainer,
    Footer
} from './BasePage.styles';
import { Sidebar } from '../../components/Sidebar';

type props = {
    children: ReactElement;
};

export function BasePage({ children }: props) {
    return (
        <>
            <Header>
                <HeaderTitle>título</HeaderTitle>
                <h3>sign in</h3> <h3>sign up</h3>
            </Header>
            <ContentContainer>
                <Sidebar />
                <ChildrenContainer>{children}</ChildrenContainer>
            </ContentContainer>
            <Footer>nothing to see here (yet)</Footer>
        </>
    );
}
