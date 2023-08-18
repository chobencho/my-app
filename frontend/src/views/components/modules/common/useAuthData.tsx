import { useContext } from "react";
import { AuthContext } from "App";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const useAuthData = () => {
  // ログイン中ユーザのユーザIDを取得
  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();
  const myEmail = currentUser ? currentUser.email : null;

  // 年齢確認済みか確認
  const { verifiedAge } = useContext(AuthContext);

  // ページURLからIDを取得
  const { id } = useParams<{ id: string }>();

  // クエリパラメータからチャット相手のユーザIDを取得
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const buddyId = searchParams.get("buddyId") || "";

  return { currentUser, myId, stringMyId, myEmail, verifiedAge, id, buddyId };
};
