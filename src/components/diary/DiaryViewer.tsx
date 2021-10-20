import React from 'react';
import styled from 'styled-components';
import { formatDate, getMoodIcon, getWeatherIcon } from '../../lib/utils';
import DiaryButtonBox from './DiaryButtonBox';

// TODO: 추후 수정
type DiaryViwerProps = {
    id: string | undefined;
    title: string;
    diary_date: string;
    content: string;
    mood: string;
    weather: string;
    open_yn?: string;
    user_id: string;
    user_name: string;
    onDelete: (id: string) => void;
};

function DiaryViewer({
    id,
    title,
    diary_date,
    content,
    mood,
    weather,
    open_yn,
    user_id,
    user_name,
    onDelete,
}: DiaryViwerProps) {
    return (
        <Container>
            <DiaryItemBox>
                <div>
                    <DiaryDate>
                        <DiaryDateSpan>{formatDate(diary_date)}</DiaryDateSpan>{' '}
                        <DiaryDateSpan before={mood ? true : false}>
                            {getMoodIcon(mood)}
                        </DiaryDateSpan>
                        <DiaryDateSpan before={weather ? true : false}>
                            {getWeatherIcon(weather)}
                        </DiaryDateSpan>
                    </DiaryDate>
                    <Title>
                        <h1>{title}</h1>
                    </Title>
                    {false && <Writer>👶{user_name}</Writer>}
                    <Content
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></Content>
                </div>
            </DiaryItemBox>
            <DiaryButtonBox id={id} onDelete={onDelete} />
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

const Title = styled.h1`
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

export default DiaryViewer;
