import client from "lib/api/client";

// 特定の掲示板のいいねを取得
export const getLike = (
  myId: string | undefined,
  generalId: string | undefined,
  model: string,
  controller: string
) => {
  return client.get(`/${model}/${controller}/${myId}`, {
    params: { generalId },
  });
};

// 掲示板にいいねする
export const createLike = (
  myId: string | undefined,
  generalId: string | undefined,
  model: string,
  controller: string
) => {
  return client.post(`/${model}/${controller}`, { myId, generalId });
};

// 掲示板のいいねを削除する
export const deleteLike = (
  myId: string | undefined,
  generalId: string | undefined,
  model: string,
  controller: string
) => {
  return client.delete(`/${model}/${controller}/${myId}`, {
    params: { generalId },
  });
};
