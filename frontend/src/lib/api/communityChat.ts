import client from "lib/api/client";
import { CommunityData } from "interfaces/index";
import { MessageItemsData } from "interfaces/index";
import { AxiosPromise } from "axios";

// コミュニティにメッセージする
export const createCommunityComment = (data: FormData): AxiosPromise => {
  return client.post(`/community/community_chats`, data);
};

// コミュニティのチャット情報を取得
export const getCommunityCommentData = (
  id: string | undefined,
  stringMyId: string | undefined
) => {
  return client.get<MessageItemsData[]>(`/community/community_chats/${id}`, {
    params: { stringMyId },
  });
};

// 特定のコミュニティ情報を取得
export const getCommunityData = (id: string | undefined) => {
  return client.get<CommunityData>(
    `/community/community_chats/${id}/communityData`
  );
};

// コミュニティに参加済みかどうかを確認
export const getSubscribedCommunity = (
  id: string | undefined,
  community_id: string | undefined
) => {
  return client.get(`/community/community_chats/${id}/subscribed`, {
    params: { community_id },
  });
};
