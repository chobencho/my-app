import client from "lib/api/client";
import Cookies from "js-cookie";
import { AxiosPromise } from "axios";

import {
  SignUpParams,
  SignInParams,
  ResetPasswordParams,
} from "interfaces/index";

// サインアップ（新規アカウント作成）
export const signUp = (params: SignUpParams) => {
  return client.post("auth", params);
};

// サインイン（ログイン）
export const signIn = (params: SignInParams) => {
  return client.post("auth/sign_in", params);
};

// export const resetPassword = (params: ResetPasswordParams) => {
//   return client.post("auth/password", params);
// };

// サインアウト（ログアウト）
export const signOut = () => {
  return client.delete("auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// アカウント削除
export const deleteAccount = () => {
  return client.delete("auth", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;
  return client.get("/auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

export const updateLastLogin = (myId: string | undefined) => {
  return client.post(`/user/users/updateLastLogin`, { myId });
};
