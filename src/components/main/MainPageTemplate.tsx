import React from 'react';
import styled from 'styled-components';

export type MainPageTemplateProps = {
    children?: React.ReactNode;
};

function MainPageTemplate({ children }: MainPageTemplateProps) {
    return (
        <Container>
            <div>이부분은 헤더가 될 예정입니다</div>
            {children}
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
`;

export default MainPageTemplate;
