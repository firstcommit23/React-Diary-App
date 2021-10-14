import {
    getDiaryListAsync,
    GET_DIARY_LIST,
    getDiaryDetailAsync,
    GET_DIARY_DETAIL,
} from './actions';
import { getDiaryList, Diary, getDiaryData } from '../../api/diary';
import { put, call, takeEvery } from 'redux-saga/effects';

function* getDiaryListSaga(
    action: ReturnType<typeof getDiaryListAsync.request>
) {
    try {
        const diaryList: Diary[] = yield call(getDiaryList);
        yield put(getDiaryListAsync.success(diaryList));
    } catch (e) {
        yield put(getDiaryListAsync.failure(e));
    }
}

function* getDiaryDetailSaga(
    action: ReturnType<typeof getDiaryDetailAsync.request>
) {
    try {
        console.log('sagas:', action);
        const diary: Diary = yield call(getDiaryData, action.payload);
        yield put(getDiaryDetailAsync.success(diary));
    } catch (e) {
        yield put(getDiaryDetailAsync.failure(e));
    }
}

export function* diarySaga() {
    yield takeEvery(GET_DIARY_LIST, getDiaryListSaga);
    yield takeEvery(GET_DIARY_DETAIL, getDiaryDetailSaga);
}
