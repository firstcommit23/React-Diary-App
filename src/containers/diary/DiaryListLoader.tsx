import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { getDiaryListAsync } from '../../modules/diary';
import DiaryListItem from '../../components/diary/DiaryListItem';
import styled from 'styled-components';
import Loading from '../../components/loading/Loading';

function DiaryListLoader() {
    const { data, loading, error } = useSelector(
        (state: RootState) => state.diary.diaryList
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDiaryListAsync.request());
    }, []);

    return (
        <>
            {loading && <Loading />}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!...</p>}
            {data &&
                data.map((diary) => (
                    <>
                        <DiaryListItem
                            key={diary.id}
                            id={diary.id}
                            title={diary.title}
                            content={diary.content}
                            user_id={diary.user_id}
                            user_name={diary.user_name}
                            mood={diary.mood}
                            weather={diary.weather}
                            open_yn={diary.open_yn}
                            diary_date={diary.diary_date}
                        />

                        <DiaryItemDiv />
                    </>
                ))}
        </>
    );
}

const DiaryItemDiv = styled.hr`
    background-color: rgba(230, 230, 230, 1);
    height: 1px;
    border: 0;
    margin: 0;
`;
export default DiaryListLoader;
