import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export type HeaderLogoProps = {};

function HeaderLogo({}: HeaderLogoProps) {
    return (
        <Container>
            <Wrapper>
                <Title href="/">일기장 ✨</Title>
                <span>당신의 오늘을 기록하세요</span>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    padding-top: 8px;
    display: flex;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-top: -32px;
    flex-direction: row;
    width: 100%;
`;

const Title = styled.a`
    display: block;
    margin-top: 32px;
    margin-right: 24px;
    font-weight: 400;
`;

export default HeaderLogo;
