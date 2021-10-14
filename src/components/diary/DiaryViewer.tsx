import React from 'react';
import styled from 'styled-components';

// TODO: 추후 수정
type DiaryViwerProps = {
    id: number;
    user_id: string;
    user_name: string;
};

function DiaryViewer({ id, user_id, user_name }: DiaryViwerProps) {
    return <Container>글 읽자!</Container>;
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

const Title = styled.div`
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
export default DiaryViewer;
