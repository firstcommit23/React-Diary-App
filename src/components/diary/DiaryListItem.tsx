import React from 'react';
import styled from 'styled-components';

// TODO: 추후 수정
type DiaryListItemProps = {
    id: number;
    title: string;
    diary_date: string;
    content: string;
    mood: string;
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
        <Content>
            <div>{title}</div>
            <div>{diary_date}</div>
            <div>{user_name}</div>
            <div>
                {mood} {weather}
            </div>
            <div>{content}</div>
        </Content>
    );
}

const Content = styled.div`
    width: 100%;
    font-size: 2em;
    margin: 50px 20px;
    padding: 20px;
    background-color: #e0e0e0;
`;

export default DiaryListItem;
