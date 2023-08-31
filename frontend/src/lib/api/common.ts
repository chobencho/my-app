import client from "lib/api/client";

// 年齢確認の可否を取得
export const checkAge = (id: string | undefined) => {
  return client.get(`/user/check_ages/${id}`);
};

// 相互のチャットルームが存在するか確認する
export const getCommonRoomId = (
  id: string | undefined,
  stringMyId: string | undefined
) => {
  return client.get<string | null>(`/message/chats/${id}/exist`, {
    params: { stringMyId },
  });
};
