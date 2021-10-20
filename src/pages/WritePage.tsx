import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import Header from '../components/header';
import DiaryWriteLoader from '../containers/diary/DiaryWriteLoader';
import DiaryModifyLoader from '../containers/diary/DiaryModifyLoader';
import { media } from '../styles/theme';

interface WriteDiaryProps extends RouteComponentProps<{ id: string }> {}
const WritePage: React.FC<WriteDiaryProps> = ({ match }) => {
    const { id } = match.params;
    return (
        <MainTemplate>
            <Header />
            <ContentsContainer>
                <ContentsWrapper>
                    <MainContents>
                        {id ? (
                            <DiaryModifyLoader id={id} />
                        ) : (
                            <DiaryWriteLoader />
                        )}
                    </MainContents>
                </ContentsWrapper>
            </ContentsContainer>
        </MainTemplate>
    );
};

const MainTemplate = styled.section`
    width: 100%;
    height: 100vh;

    ${media.mobile} {
        height: 100%;
    }
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
    display: flex;
    flex-direction: column;
    margin: 0 64px;
    padding-top: 30px;
    width: 100%;
    height: 80vh;
    min-width: 0;
    max-width: ${({ theme }) => theme.width.maxWidth};
    overflow-y: hidden;

    & > div {
        position: relative;
        padding: 10px 0;
    }

    ${media.mobile} {
        margin: 0 14px;
        height: 100%;
    }
`;

export default WritePage;
