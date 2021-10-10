import { createReducer } from 'typesafe-actions';
import { DiaryState, DiaryAction } from './types';
import {
    GET_DIARY_LIST,
    GET_DIARY_LIST_SUCCESS,
    GET_DIARY_LIST_FAILURE,
} from './actions';

const initialState: DiaryState = {
    diaryList: {
        loading: false,
        error: null,
        data: null,
    },
};

const diary = createReducer<DiaryState, DiaryAction>(initialState, {
    [GET_DIARY_LIST]: (state) => ({
        ...state,
        diaryList: {
            loading: true,
            error: null,
            data: null,
        },
    }),
    [GET_DIARY_LIST_SUCCESS]: (state, { payload: list }) => ({
        ...state,
        diaryList: {
            loading: false,
            error: null,
            data: list,
        },
    }),
    [GET_DIARY_LIST_FAILURE]: (state, { payload: error }) => ({
        ...state,
        diaryList: {
            loading: false,
            error: error,
            data: null,
        },
    }),
});

export default diary;
