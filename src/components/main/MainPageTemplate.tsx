import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';

export type MainPageTemplateProps = {
    children?: React.ReactNode;
};

function MainPageTemplate({ children }: MainPageTemplateProps) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
`;

export default MainPageTemplate;
