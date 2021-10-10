import axios from 'axios';

export async function getDiaryList() {
    const response = await axios.get<Diary[]>(`https://api.github.com/users`);
    return response.data;
}

// TODO: 나중에 stirng -> number로 변경
export async function getDiaryDetail(id: string) {
    const response = await axios.get<Diary>(
        `https://api.github.com/users/${id}`
    );
    return response.data;
}

export interface Diary {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}
