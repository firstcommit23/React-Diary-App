import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import DatePicker from 'react-date-picker';
import { getMoodIcon, getWeatherIcon } from '../lib/utils';
import format from 'date-fns/format';
import Button from '../components/common/Button';
import { useHistory } from 'react-router-dom';
import { setDiary, Diary } from '../api/diary';

// 임시저장한 내용이 있으면 가져오기
// 컴포넌트 리펙토링 고민하기
// 파이어베이스 연동

function WritePage() {
    const [today, setToday] = useState(new Date());
    const [diaryData, setDiaryData] = useState<Diary>({
        title: '',
        user_id: 'guest',
        content: '',
        user_name: 'GUEST',
        diary_date: format(today, 'yyyy-M-d'),
        mood: '',
        weather: '',
        id: 0,
    });

    // TODO: useCallback 적용
    const history = useHistory();

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

    const onPublish = () => {
        console.log(diaryData);
        setDiary(diaryData);
    };

    return (
        <MainTemplate>
            <Header />
            <ContentsContainer>
                <ContentsWrapper>
                    <MainContents>
                        <div>
                            <DatePicker
                                value={today}
                                onChange={(date: Date) => {
                                    setToday(date);
                                    setDiaryData({
                                        ...diaryData,
                                        diary_date: format(date, 'yyyy-M-d'),
                                    });
                                }}
                            />
                        </div>
                        <div>
                            <TitleInput
                                type="text"
                                name="title"
                                placeholder="제목을 입력하세요"
                                onChange={onChange}
                            />
                        </div>
                        <div>
                            {/* TODO: Map 돌리기 */}
                            <span>오늘은 어떤 기분이였나요?</span>
                            {diaryData && diaryData.mood ? (
                                <MoodIcon
                                    data-mood={diaryData.mood}
                                    onClick={onMoodChange}
                                >
                                    {getMoodIcon(diaryData.mood)}
                                </MoodIcon>
                            ) : (
                                <>
                                    <MoodIcon
                                        data-mood="ROMANTIC"
                                        onClick={onMoodChange}
                                    >
                                        🌻
                                    </MoodIcon>
                                    <MoodIcon
                                        data-mood="GOOD"
                                        onClick={onMoodChange}
                                    >
                                        🙂
                                    </MoodIcon>
                                    <MoodIcon
                                        data-mood="SWEET"
                                        onClick={onMoodChange}
                                    >
                                        😚
                                    </MoodIcon>
                                    <MoodIcon
                                        data-mood="FUN"
                                        onClick={onMoodChange}
                                    >
                                        😆
                                    </MoodIcon>
                                    <MoodIcon
                                        data-mood="ANGRY"
                                        onClick={onMoodChange}
                                    >
                                        😡
                                    </MoodIcon>
                                    <MoodIcon
                                        data-mood="GLOOMY"
                                        onClick={onMoodChange}
                                    >
                                        😞
                                    </MoodIcon>
                                    <MoodIcon
                                        data-mood="NORMAL"
                                        onClick={onMoodChange}
                                    >
                                        😶
                                    </MoodIcon>
                                </>
                            )}
                        </div>
                        <div>
                            <span>오늘의 날씨는 어땟나요?</span>

                            {diaryData && diaryData.weather ? (
                                <WeatherIcon
                                    data-weather={diaryData.weather}
                                    onClick={onWeatherChange}
                                >
                                    {getWeatherIcon(diaryData.weather)}
                                </WeatherIcon>
                            ) : (
                                <>
                                    <WeatherIcon
                                        data-weather="ROMANTIC"
                                        onClick={onWeatherChange}
                                    >
                                        ☀️
                                    </WeatherIcon>
                                    <WeatherIcon
                                        data-weather="PARIALLY_CLOUDY"
                                        onClick={onWeatherChange}
                                    >
                                        🌤
                                    </WeatherIcon>
                                    <WeatherIcon
                                        data-weather="CLOUDY"
                                        onClick={onWeatherChange}
                                    >
                                        ☁️
                                    </WeatherIcon>
                                    <WeatherIcon
                                        data-weather="RAIN"
                                        onClick={onWeatherChange}
                                    >
                                        ☔️
                                    </WeatherIcon>
                                    <WeatherIcon
                                        data-weather="SNOW"
                                        onClick={onWeatherChange}
                                    >
                                        ☃️
                                    </WeatherIcon>
                                    <WeatherIcon
                                        data-weather="STORMY"
                                        onClick={onWeatherChange}
                                    >
                                        🌪
                                    </WeatherIcon>
                                </>
                            )}
                        </div>
                        <div>
                            <Textarea
                                placeholder="당신의 오늘은 어떤 날이였나요?"
                                name="content"
                                onChange={onChange}
                            ></Textarea>
                        </div>
                        <WriteFooter>
                            <BackButton onClick={() => history.goBack()}>
                                나가기
                            </BackButton>
                            <Group>
                                <StyledButton
                                    inline
                                    color="darkGray"
                                    onClick={() => {}}
                                >
                                    임시저장
                                </StyledButton>
                                <StyledButton inline onClick={onPublish}>
                                    작성완료
                                </StyledButton>
                            </Group>
                        </WriteFooter>
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
    margin: 0 64px;
    min-width: 0;
    width: 100%;
    max-width: ${({ theme }) => theme.width.maxWidth};
    padding-top: 30px;

    & > div {
        padding: 10px 0;
    }
`;

const TitleInput = styled.input`
    width: 100%;
    border: 2px solid #e2e2e2;
    background-color: transparent;
    line-height: 2;
    padding: 0 20px;
    font-weight: 200;
    color: #000;
    font-size: 20px;
    transition: all 0.25s;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 500px;
    border: 2px solid #e2e2e2;
    background-color: transparent;
    line-height: 2;
    padding: 0 20px;
    font-weight: 200;
    color: #000;
    font-size: 20px;
    transition: all 0.25s;
`;

const MoodIcon = styled.span`
    cursor: pointer;
`;
const WeatherIcon = styled.span`
    cursor: pointer;
`;

const WriteFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.85);
    padding: 0 1rem;
    height: 4rem;
    width: 100%;
`;

const BackButton = styled.div`
    height: 2.5rem;
    padding: 0.5rem 1rem;
    background: none;
    font-size: 1.125rem;
`;

const Group = styled.div`
    align-items: center;
    justify-content: flex-end;
`;

const StyledButton = styled(Button)`
    height: 2.5rem;
    font-size: 1.125rem;
    & + & {
        margin- left: 0.75rem;
    }
`;
export default WritePage;
