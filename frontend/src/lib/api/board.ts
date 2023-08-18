import client from "lib/api/client";
import clientImage from "lib/api/clientImage";
import { BoardData } from "interfaces/index";
import { AxiosPromise } from "axios";

// 掲示板一覧を取得
export const getBoards = () => {
  return client.get<BoardData[]>("/board/boards");
};

// 特定の掲示板情報を取得
export const getBoardData = (id: string | undefined) => {
  return client.get<BoardData>(`/board/boards/${id}`);
};

// 自分の作成した掲示板一覧を取得
export const getMyBoards = (id: string | undefined) => {
  return client.get<BoardData[]>(`/board/boards/${id}/myboard`);
};

// 編集用掲示板情報を取得
export const getEditBoardData = (id: string | undefined) => {
  return client.get(`/board/boards/${id}/edit`);
};

// 掲示板情報を変更
export const editBoardData = (
  id: string | undefined,
  data: FormData
): AxiosPromise => {
  return clientImage.put(`/board/boards/${id}`, data);
};

// 自分がいいねした掲示板一覧を取得
export const getMyFavBoards = (id: string | undefined) => {
  return client.get<BoardData[]>(`/board/boards/${id}/favboard`);
};

// 掲示板を作成
export const createBoardData = (data: FormData): AxiosPromise => {
  return clientImage.post(`/board/boards`, data);
};

// 掲示板を削除
export const deleteBoard = (id: string | undefined) => {
  return client.delete(`/board/boards/${id}`);
};
