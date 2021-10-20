import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { getDiaryListAsync, deleteDiaryAsync } from '../../modules/diary';
import DiaryListItem from '../../components/diary/DiaryListItem';
import styled from 'styled-components';
import Loading from '../../components/loading/Loading';
import toast from '../../lib/toast';

function DiaryListLoader() {
    const { data, loading, error } = useSelector(
        (state: RootState) => state.diary.diaryList
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDiaryListAsync.request());
    }, [dispatch]);

    const onDelete = (id: string) => {
        const result = dispatch(deleteDiaryAsync(id));
        toast.success('삭제되었습니다!');

        // 동기적으로 실행되야 하는데..
        dispatch(getDiaryListAsync.request());
    };

    return (
        <>
            {loading && <Loading />}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!...</p>}
            {data &&
                data.map((diary, index) => (
                    <>
                        <DiaryListItem
                            key={index}
                            id={diary.id}
                            title={diary.title}
                            content={diary.content}
                            user_id={diary.user_id}
                            user_name={diary.user_name}
                            mood={diary.mood}
                            weather={diary.weather}
                            open_yn={diary.open_yn}
                            diary_date={diary.diary_date}
                            onDelete={onDelete}
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
