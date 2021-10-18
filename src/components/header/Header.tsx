import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderInfo from './HeaderInfo';
import { media } from '../../styles/theme';

export type HeaderProps = {
    children?: React.ReactNode;
};

function Header({ children }: HeaderProps) {
    return (
        <Container>
            <Wrapper>
                <HeaderBox>
                    <HeaderArea>
                        <HeaderLogo />
                        <HeaderInfo userName="GEUST" userId="guest" />
                    </HeaderArea>
                </HeaderBox>
            </Wrapper>
        </Container>
    );
}

const Container = styled.section`
    min-height: 115px;
    display: flex;
    font-size: 2em;
    justify-content: center;
    box-shadow: inset 0 -1px 0 rgb(230 230 230);
`;

const Wrapper = styled.div`
    margin: 0 64px;
    max-width: ${({ theme }) => theme.width.maxWidth};
    width: 100%;

    ${media.mobile} {
        margin: 0 18px;
    }
`;

const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 115px;
`;

const HeaderArea = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
`;
export default Header;
