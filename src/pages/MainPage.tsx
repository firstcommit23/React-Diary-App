import DiaryListLoader from '../containers/diary/DiaryListLoader';
import styled from 'styled-components';
import Header from '../components/header';
import { media } from '../styles/theme';

function MainPage() {
    return (
        <MainTemplate>
            <Header />
            <ContentsContainer>
                <ContentsWrapper>
                    <MainContents>
                        <DiaryListWrapper>
                            <DiaryListLoader />
                        </DiaryListWrapper>
                    </MainContents>
                </ContentsWrapper>
            </ContentsContainer>
        </MainTemplate>
    );
}

const MainTemplate = styled.section`
    width: 100%;
`;

const ContentsContainer = styled.main`
    flex: 1 0 auto;
`;
const ContentsWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const MainContents = styled.div`
    position: relative;

    margin: 0 64px;
    min-width: 0;
    width: 100%;
    max-width: ${({ theme }) => theme.width.maxWidth};

    ${media.mobile} {
        margin: 0 14px;
    }
`;

const DiaryListWrapper = styled.div`
    margin-top: 64px;

    ${media.mobile} {
        margin-top: 34px;
    }
`;

export default MainPage;
