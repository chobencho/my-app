import client from 'lib/api/client';
import clientImage from 'lib/api/clientImage';
import { AxiosPromise } from 'axios';
import { UserData } from 'interfaces/index';
import { UserDataResponse } from 'interfaces/index';
import Cookies from 'js-cookie';

// ユーザ一覧を取得
export const getUsers = (id: string | undefined, keywords: string[]) => {
    return client.get<UserData[]>('/user/users', {
        params: { id, keywords },
    });
};

// 並び替えユーザ一覧を取得
export const getSortUsers = (id: string | undefined, sortValue: string) => {
    return client.get<UserData[]>(`/user/users/${id}/sort`, {
        params: { sortValue },
    });
};

// ユーザ情報取得
export const fetchUserData = (id: string | undefined) => {
    return client.get<UserDataResponse>(`/user/users/${id}`);
};

// ユーザ情報取得
export const getEditUserData = (id: string | undefined) => {
    return client.get<UserDataResponse>(`/user/users/${id}/edit`, {
        headers: {
            'access-token': Cookies.get('_access_token'),
            client: Cookies.get('_client'),
            uid: Cookies.get('_uid'),
        },
    });
};

// ユーザ趣味情報取得
export const getHobbyData = (id: string | undefined) => {
    return client.get(`/user/users/${id}/hobby`);
};

// ユーザ興味情報取得
export const getInterestData = (id: string | undefined) => {
    return client.get(`/user/users/${id}/interest`);
};

// ユーザ研究タグ情報取得
export const getResearchTagData = (id: string | undefined) => {
    return client.get(`/user/users/${id}/researchTag`);
};

// ユーザ情報変更
export const updateUserData = (id: string | undefined, data: FormData): AxiosPromise => {
    return clientImage.put(`/user/users/${id}`, data);
};
