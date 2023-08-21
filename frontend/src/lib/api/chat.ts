import client from "lib/api/client";
import { AxiosPromise } from "axios";
import { ChatUserData } from "interfaces/index";
import { MessageItemsData } from "interfaces/index";

// ルーム内のメッセージ情報を取得
export const getMessages = (
  id: string | undefined,
  partnerId: string | undefined
) => {
  return client.get<MessageItemsData[]>(`/message/chats/${id}`, {
    params: { partnerId },
  });
};

// 自分がやりとりしてるルーム情報を取得
export const getChatPartner = (
  roomId: string | undefined,
  stringMyId: string | undefined,
  buddyId: string | undefined
) => {
  return client.get<ChatUserData>(`/message/chats/${buddyId}/chatBuddy`, {
    params: { roomId, stringMyId },
  });
};

// チェットメッセージを作成する
export const createMessage = (data: FormData): AxiosPromise => {
  return client.post(`/message/chats`, data);
};

// ルームを削除する
export const deleteChatRoom = (room_id: string | undefined): AxiosPromise => {
  return client.delete(`/message/chats/${room_id}`);
};
