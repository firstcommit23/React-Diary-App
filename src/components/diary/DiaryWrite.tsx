import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import format from 'date-fns/format';
import Button from '../common/Button';
import { useHistory } from 'react-router-dom';
import { getMoodIcon, getWeatherIcon } from '../../lib/utils';

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
type DiaryWriteProps = {
    diaryData: WriteDiary;
    setDiaryData: (data: WriteDiary) => void;
    today: Date;
    setToday: (date: Date) => void;
    onMoodChange: (e: React.MouseEvent<HTMLElement>) => void;
    onWeatherChange: (e: React.MouseEvent<HTMLElement>) => void;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onPublish: () => void;
};

function DiaryWrite({
    diaryData,
    setDiaryData,
    today,
    setToday,
    onMoodChange,
    onWeatherChange,
    onChange,
    onPublish,
}: DiaryWriteProps) {
    // TODO: useCallback 적용
    const history = useHistory();

    return (
        <>
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
                    <MoodIcon data-mood={diaryData.mood} onClick={onMoodChange}>
                        {getMoodIcon(diaryData.mood)}
                    </MoodIcon>
                ) : (
                    <>
                        <MoodIcon data-mood="ROMANTIC" onClick={onMoodChange}>
                            🌻
                        </MoodIcon>
                        <MoodIcon data-mood="GOOD" onClick={onMoodChange}>
                            🙂
                        </MoodIcon>
                        <MoodIcon data-mood="SWEET" onClick={onMoodChange}>
                            😚
                        </MoodIcon>
                        <MoodIcon data-mood="FUN" onClick={onMoodChange}>
                            😆
                        </MoodIcon>
                        <MoodIcon data-mood="ANGRY" onClick={onMoodChange}>
                            😡
                        </MoodIcon>
                        <MoodIcon data-mood="GLOOMY" onClick={onMoodChange}>
                            😞
                        </MoodIcon>
                        <MoodIcon data-mood="NORMAL" onClick={onMoodChange}>
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
                            data-weather="SUNNY"
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
                <BackButton onClick={() => history.goBack()}>나가기</BackButton>
                <Group>
                    <StyledButton inline color="darkGray" onClick={() => {}}>
                        임시저장
                    </StyledButton>
                    <StyledButton inline onClick={onPublish}>
                        작성완료
                    </StyledButton>
                </Group>
            </WriteFooter>
        </>
    );
}

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

export default DiaryWrite;
