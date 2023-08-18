import client from "lib/api/client";
import { CommentData } from "interfaces/index";
import { AxiosPromise } from "axios";

// 掲示板のコメント情報を取得
export const getBoardComment = (id: string | undefined) => {
  return client.get<CommentData[]>(`/board/board_comments/${id}`);
};

// 掲示板にコメントを作成
export const createComment = (data: FormData): AxiosPromise => {
  return client.post(`/board/board_comments`, data);
};
