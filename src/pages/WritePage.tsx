import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import DatePicker from 'react-date-picker';
import { getMoodIcon, getWeatherIcon } from '../lib/utils';
import format from 'date-fns/format';
import Button from '../components/common/Button';
import { useHistory } from 'react-router-dom';
import { setDiary, Diary } from '../api/diary';
import toast from '../lib/toast';
import DiaryWriteLoader from '../containers/diary/DiaryWriteLoader';

// 임시저장한 내용이 있으면 가져오기
// 컴포넌트 리펙토링 고민하기
// 파이어베이스 연동

interface WriteDiary {
    title: string;
    diary_date: string;
    content: string;
    mood: string;
    weather: string;
    open_yn?: string;
    user_id: string;
    user_name: string;
}

function WritePage() {
    return (
        <MainTemplate>
            <Header />
            <ContentsContainer>
                <ContentsWrapper>
                    <MainContents>
                        <DiaryWriteLoader />
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
    padding-top: 30px;

    & > div {
        padding: 10px 0;
    }
`;

export default WritePage;
