import client from "lib/api/client";
import { CommunityData } from "interfaces/index";
import { CommunityDataResponse } from "interfaces/index";
import { AxiosPromise } from "axios";

// コミュニティ一覧を取得
export const getCommunityData = (id: string | undefined) => {
  return client.get<CommunityDataResponse>(`/community/communities/${id}`);
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
