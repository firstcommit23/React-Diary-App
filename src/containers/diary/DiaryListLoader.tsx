import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { getDiaryListAsync, deleteDiaryAsync } from '../../modules/diary';
import DiaryListItem from '../../components/diary/DiaryListItem';
import styled from 'styled-components';
import Loading from '../../components/loading/Loading';
import toast from '../../lib/toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function DiaryListLoader() {
    const { data, loading, error } = useSelector(
        (state: RootState) => state.diary.diaryList
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDiaryListAsync.request());
    }, []);

    const confirlDelete = (id: string) => {
        confirmAlert({
            message: '작성하신 일기를 삭제하시겠습니까?',
            buttons: [
                { label: '삭제', onClick: () => onDelete(id) },
                { label: '취소', onClick: () => console.log('No') },
            ],
        });
    };

    const onDelete = (id: string) => {
        const result = dispatch(deleteDiaryAsync(id));
        toast.success('삭제되었습니다!');

        dispatch(getDiaryListAsync.request());
    };

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
                            onDelete={confirlDelete}
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
