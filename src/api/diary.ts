import axios from 'axios';
import { getDocuments, postDocument, getDocument } from '../firebase';

export async function getDiaryList() {
    //const response = await axios.get<Diary[]>(`https://api.github.com/users`);
    const response = await getDocuments('diary');

    //sort
    // response.sort((a: any, b: any) => (a.diary_date > b.diary_date ? -1 : 1));
    return response;
}

// TODO: 나중에 stirng -> number로 변경
export async function getDiaryData(id: string) {
    console.log('in diary api..', id);
    const response = await getDocument('diary', id);

    return response;
}

export async function setDiary(diary: Diary) {
    // 유효성 체크는 완료 후 오는 것으로.
    // id는 어쩌지 근데
    await postDocument('diary', diary);
}

export interface Diary {
    id?: string;
    title: string;
    diary_date: string;
    content: string;
    mood: string;
    weather: string;
    open_yn?: string;
    user_id: string;
    user_name: string;
}
