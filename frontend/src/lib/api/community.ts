import client from "lib/api/client";
import { CommunityData } from "interfaces/index";
import { AxiosPromise } from "axios";

// コミュニティ一覧を取得
export const getAllCommunityData = () => {
  return client.get<CommunityData[]>(`/community/communities`);
};

// 人気コミュニティを取得
export const getPopularCommunityData = () => {
  return client.get<CommunityData[]>("/community/communities/popular");
};

// 新規コミュニティを取得
export const getNewCommunityData = () => {
  return client.get<CommunityData[]>("/community/communities/latest");
};

// 参加済みコミュニティを取得
export const getMyCommunityData = (id: string | undefined) => {
  return client.get<CommunityData[]>(`/community/communities/${id}`);
};

// コミュニティに参加する
export const subscribeCommunity = (data: FormData): AxiosPromise => {
  return client.post(`/community/communities`, data);
};

// コミュニティを退会する
export const withdrawCommunity = (
  id: string | undefined,
  user_id: string | undefined
) => {
  return client.delete(`/community/communities/${id}`, { params: { user_id } });
};

// 管理者にメール送信
export const sendMailApplyNewCommunity = (
  stringMyId: string,
  title: string,
  body: string
) => {
  return client.post(`/community/communities/sendMail`, {
    stringMyId,
    title,
    body,
  });
};
