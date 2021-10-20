import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import {
    getDiaryDetailAsync,
    deleteDiaryAsync,
    getDiaryListAsync,
} from '../../modules/diary';
import DiaryViewer from '../../components/diary/DiaryViewer';
import Loading from '../../components/loading/Loading';
import toast from '../../lib/toast';

type DiaryDetailLoaderProps = {
    id: string;
};

function DiaryDetailLoader({ id }: DiaryDetailLoaderProps) {
    const { data, loading, error } = useSelector(
        (state: RootState) => state.diary.diary
    );
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDiaryDetailAsync.request(id));
    }, []);

    const onDelete = (id: string) => {
        const result = dispatch(deleteDiaryAsync(id));
        toast.success('삭제되었습니다!');

        // 동기적으로 실행되야 하는데..
        history.push(`/`);
    };

    return (
        <>
            {loading && <Loading />}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!...</p>}
            {data && (
                <DiaryViewer
                    key={data.id}
                    id={id}
                    title={data.title}
                    diary_date={data.diary_date}
                    content={data.content}
                    mood={data.mood}
                    weather={data.weather}
                    open_yn={data.open_yn}
                    user_id={data.user_id}
                    user_name={data.user_name}
                    onDelete={onDelete}
                />
            )}
        </>
    );
}

export default DiaryDetailLoader;
