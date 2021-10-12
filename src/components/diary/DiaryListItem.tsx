import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatDate, getMoodIcon, getWeatherIcon } from '../../lib/utils';

// TODO: 추후 수정
type DiaryListItemProps = {
    id: number;
    title: string;
    diary_date: string;
    content: string;
    mood: string; //TODO: 이런경우
    weather: string;
    open_yn: string;
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
                    <Writer>👶{user_name}</Writer>
                    <div></div>
                    <div>{content}</div>
                </div>
                <div>Read more. 2 min read</div>
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
    color: rega(41, 41, 41, 1);
`;

const Writer = styled.div``;
const Content = styled.div``;
const DiaryButtonBox = styled.div``;
export default DiaryListItem;
