import { createAsyncAction, createAction } from 'typesafe-actions';
import { Diary } from '../../api/diary';
import { AxiosError } from 'axios';

export const GET_DIARY_LIST = 'diary/GET_DIARY_LIST';
export const GET_DIARY_LIST_SUCCESS = 'diary/GET_DIARY_LIST_SUCCESS';
export const GET_DIARY_LIST_FAILURE = 'diary/GET_DIARY_LIST_FAILURE';

export const GET_DIARY_DETAIL = 'diary/GET_DIARY_DETAIL';
export const GET_DIARY_DETAIL_SUCCESS = 'diary/GET_DIARY_DETAIL_SUCCESS';
export const GET_DIARY_DETAIL_FAILURE = 'diary/GET_DIARY_DETAIL_FAILURE';

export const DELETE_DIARY = 'diary/DELETE_DIARY';
// export const DELETE_DIARY_SUCCESS = 'diary/DELETE_DIARY_SUCCESS';
// export const DELETE_DIARY_FAILURE = 'diary/DELETE_DIARY_FAILURE';

export const getDiaryListAsync = createAsyncAction(
    GET_DIARY_LIST,
    GET_DIARY_LIST_SUCCESS,
    GET_DIARY_LIST_FAILURE
)<[undefined, undefined], Diary[], AxiosError | unknown>();

export const getDiaryDetailAsync = createAsyncAction(
    GET_DIARY_DETAIL,
    GET_DIARY_DETAIL_SUCCESS,
    GET_DIARY_DETAIL_FAILURE
)<string, Diary, AxiosError | unknown>();

// export const deleteDiaryAsync = createAsyncAction(
//     DELETE_DIARY,
//     DELETE_DIARY_SUCCESS,
//     DELETE_DIARY_FAILURE
// )<string, number, AxiosError | unknown>();
export const deleteDiaryAsync = createAction(DELETE_DIARY)<string>();
