import { React, useState, useEffect } from 'react';
import MainPageTemplate from '../components/main/MainPageTemplate';
import DiaryListLoader from '../containers/diary/DiaryListLoader';

function MainPage() {
    return (
        <MainPageTemplate>
            <DiaryListLoader />
        </MainPageTemplate>
    );
}
export default MainPage;
