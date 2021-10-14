import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Diary } from '../../api/diary';

export type DiaryAction = ActionType<typeof actions>;

export type DiaryState = {
    diaryList: {
        loading: boolean;
        error: Error | null;
        data: Diary[] | null;
    };
    diary: {
        loading: boolean;
        error: Error | null;
        data: Diary | null;
    };
};
