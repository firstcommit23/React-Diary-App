import React from 'react';
import styled from 'styled-components';

export type HeaderProps = {
    children?: React.ReactNode;
};

function Header({ children }: HeaderProps) {
    return (
        <Container>
            <Wrapper>
                <HeaderBox>일기장 ㅋㅋ</HeaderBox>
            </Wrapper>
        </Container>
    );
}

const Container = styled.section`
    min-height: 115px;
    display: flex;
    font-size: 4em;
    justify-content: center;
`;

const Wrapper = styled.div`
    margin: 0 64px;
    max-width: 1192px;
`;

const HeaderBox = styled.div``;

export default Header;
