import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import diary, { diarySaga } from './diary';

const rootReducer = combineReducers({
    diary,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([diarySaga()]);
}
