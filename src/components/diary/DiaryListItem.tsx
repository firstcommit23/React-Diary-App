import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatDate, getMoodIcon, getWeatherIcon } from '../../lib/utils';

// TODO: 추후 수정
type DiaryListItemProps = {
    id?: string;
    title: string;
    diary_date: string;
    content: string;
    mood: string; //TODO: 이런경우
    weather: string;
    open_yn?: string;
    user_id: string;
    user_name: string;
};

function DiaryListItem({
    id,
    title,
    diary_date,
    content,
    mood,
    weather,
    open_yn,
    user_id,
    user_name,
}: DiaryListItemProps) {
    return (
        <Container>
            <DiaryItemBox>
                <div>
                    <DiaryDate>
                        <DiaryDateSpan>{formatDate(diary_date)}</DiaryDateSpan>{' '}
                        <DiaryDateSpan before={true}>
                            {getMoodIcon(mood)}
                        </DiaryDateSpan>
                        <DiaryDateSpan before={true}>
                            {getWeatherIcon(weather)}
                        </DiaryDateSpan>
                    </DiaryDate>
                    <Title to={`/diary/${id}`}>
                        <h1>{title}</h1>
                    </Title>
                    {false && <Writer>👶{user_name}</Writer>}
                    <Content>{content}</Content>
                </div>
            </DiaryItemBox>
            <DiaryButtonBox>
                <div>좋아요</div>
                <div>삭제</div>
                <div>수정</div>
            </DiaryButtonBox>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    font-size: 2em;
    margin: 50px auto;
    padding: 20px;
`;

const DiaryItemBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const DiaryDate = styled.div`
    flex: 1;
    display: flex;
    color: #8c8c8c;
    overflow: hidden;
    padding-bottom: 10px;
    font-size: 1rem;
    line-height: 1.5rem;
`;

const DiaryDateSpan = styled.span<{
    before?: boolean;
}>`
 ${(props) => {
     if (props.before) {
         return `
       flex: none;
       ::before {
         display: inline-block;
         margin: 9px 4px 0;
         width: 2px;
         height: 2px;
         background-color: #939393;
         border-radius: 50%;
         font-size: 0.85em;
         vertical-align: top;
         content: '';
       }
     `;
     }
 }} }
`;

const Title = styled(Link)`
    letter-spacing: -0.014em;
    line-height: 44px;
    margin-top: 0.08em;
    font-size: 36px;
    font-weight: 700;
    padding-bottom: 10px;

    h1 {
        color: #2a2a2a;
    }
`;

const Writer = styled.div`
    padding-bottom: 20px;
    font-size: 0.87rem;
`;
const Content = styled.div`
    font-size: 1.5rem;
    padding-bottom: 30px;
    line-height: 32px;
    margin-top: 0.86em;
    letter-spacing: -0.003em;
    font-size: 21px;
    word-break: break-word;
`;
const DiaryButtonBox = styled.div`
    display: flex;

    & > div {
        margin-right: 5px;
        font-size: 0.85rem;
    }
`;
export default DiaryListItem;
