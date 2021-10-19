import React, { useState, ChangeEvent, useEffect } from 'react';
import format from 'date-fns/format';
import { useHistory } from 'react-router-dom';
import toast from '../../lib/toast';
import { setDiary, Diary } from '../../api/diary';
import DiaryWrite from '../../components/diary/DiaryWrite';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { getDiaryDetailAsync } from '../../modules/diary';

type DiaryWriteLoaderProps = {
    id?: string | null;
};

function DiaryWriteLoader({ id }: DiaryWriteLoaderProps) {
    const [today, setToday] = useState(new Date());
    const [diaryData, setDiaryData] = useState<Diary>({
        id: '',
        title: '',
        user_id: 'guest',
        content: '',
        user_name: 'GUEST',
        diary_date: format(today, 'yyyy-M-d'),
        mood: '',
        weather: '',
    });
    // TODO: useCallback 적용
    const history = useHistory();

    // id가 있을 경우 조회
    const { data, loading, error } = useSelector(
        (state: RootState) => state.diary.diary
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(getDiaryDetailAsync.request(id));
            if (data) {
                setDiaryData(data);
                console.log('data:', data);
            }
        }
    }, [dispatch]);

    // TODO: hook 만들기
    const onMoodChange = (e: React.MouseEvent<HTMLElement>) => {
        const mood = e.currentTarget.getAttribute('data-mood');

        // state.mood 변경하고 state.mood가 있을 경우는 그것만 보이고,
        // state.mood 가 있는 경우에 클릭한 경우에는 다시 전체 보이게 하기
        if (mood && diaryData.mood === '') {
            setDiaryData({
                ...diaryData,
                mood,
            });
        } else {
            setDiaryData({
                ...diaryData,
                mood: '',
            });
        }
    };

    const onWeatherChange = (e: React.MouseEvent<HTMLElement>) => {
        const weather = e.currentTarget.getAttribute('data-weather');

        // state.weather 변경하고 state.weather 있을 경우는 그것만 보이고,
        // state.weather 가 있는 경우에 클릭한 경우에는 다시 전체 보이게 하기
        if (weather && diaryData.weather === '') {
            setDiaryData({
                ...diaryData,
                weather,
            });
        } else {
            setDiaryData({
                ...diaryData,
                weather: '',
            });
        }
        console.log(diaryData);
    };

    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setDiaryData({
            ...diaryData,
            [name]: value,
        });
    };

    const onPublish = async () => {
        if (diaryData.title === '') {
            toast.error('제목은 꼭 입력해 주세요!');
            return;
        }
        await setDiary(diaryData);
        toast.info('등록 되었습니다.');
        history.push('/');
    };

    return (
        <>
            <DiaryWrite
                diaryData={diaryData}
                setDiaryData={setDiaryData}
                today={today}
                setToday={setToday}
                onMoodChange={onMoodChange}
                onWeatherChange={onWeatherChange}
                onChange={onChange}
                onPublish={onPublish}
            />
        </>
    );
}

export default DiaryWriteLoader;
