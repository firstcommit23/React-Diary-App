import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { getDiaryDetailAsync } from '../../modules/diary';
import DiaryViewer from '../../components/diary/DiaryViewer';
import styled from 'styled-components';

type DiaryDetailLoaderProps = {
    id: string;
};

function DiaryDetailLoader({ id }: DiaryDetailLoaderProps) {
    const { data, loading, error } = useSelector(
        (state: RootState) => state.diary.diary
    );
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(id);
        dispatch(getDiaryDetailAsync.request(id));
    }, []);

    return (
        <>
            {loading && <p style={{ textAlign: 'center' }}>로딩중...</p>}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!...</p>}
            {data && (
                <DiaryViewer
                    key={data.id}
                    title={data.title}
                    diary_date={data.diary_date}
                    content={data.content}
                    mood={data.mood}
                    weather={data.weather}
                    open_yn={data.open_yn}
                    user_id={data.user_id}
                    user_name={data.user_name}
                />
            )}
        </>
    );
}

export default DiaryDetailLoader;
