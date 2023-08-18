import client from "lib/api/client";

// 特定の掲示板のいいねを取得
export const getLike = (
  myId: string | undefined,
  userId: string | undefined
) => {
  return client.get(`/user/user_likes/${myId}`, { params: { userId } });
};

// 掲示板にいいねする
export const createLike = (
  myId: string | undefined,
  userId: string | undefined
) => {
  return client.post(`/user/user_likes`, { myId, userId });
};

// 掲示板のいいねを削除する
export const deleteLike = (
  myId: string | undefined,
  userId: string | undefined
) => {
  return client.delete(`/user/user_likes/${myId}`, { params: { userId } });
};
