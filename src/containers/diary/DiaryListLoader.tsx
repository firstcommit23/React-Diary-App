import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { getDiaryListAsync } from '../../modules/diary';
import DiaryListItem from '../../components/diary/DiaryListItem';

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
            {loading && <p style={{ textAlign: 'center' }}>로딩중...</p>}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!...</p>}
            {data &&
                data.map((diary) => (
                    <DiaryListItem
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
                ))}
        </>
    );
}

export default DiaryListLoader;
