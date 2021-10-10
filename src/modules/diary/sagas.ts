import { getDiaryListAsync, GET_DIARY_LIST } from './actions';
import { getDiaryList, Diary } from '../../api/diary';
import { put, call, takeEvery } from 'redux-saga/effects';

function* getDiaryListSaga(
    action: ReturnType<typeof getDiaryListAsync.request>
) {
    try {
        console.log('11');
        const diaryList: Diary[] = yield call(getDiaryList);
        console.log(diaryList);
        yield put(getDiaryListAsync.success(diaryList));
    } catch (e) {
        yield put(getDiaryListAsync.failure(e));
    }
}

export function* diarySaga() {
    yield takeEvery(GET_DIARY_LIST, getDiaryListSaga);
}
