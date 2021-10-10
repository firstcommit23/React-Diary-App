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
                        key={diary.id}
                        name={diary.repos_url}
                        thumbnail={diary.avatar_url}
                        bio={diary.repos_url}
                        blog={diary.repos_url}
                    />
                ))}
        </>
    );
}

export default DiaryListLoader;
