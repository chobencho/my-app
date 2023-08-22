import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Function
import { getEditUserData } from "lib/api/user";
// Interface
import { UserDataResponse } from "interfaces/index";
// Components
import UserEditForm from "views/components/modules/user/UserEditForm";
import UserEditItem from "views/components/modules/user/UserEditItem";

const UserEdit = () => {
  // State
  const [user, setUser] = useState<UserDataResponse | null>(null);
  // Id
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  // ユーザ情報取得
  const handleGetEditUserData = async () => {
    try {
      const res = await getEditUserData(id);
      setUser(res.data);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        // 403エラーが発生した場合、エラーページにリダイレクト
        navigate("/error"); // リダイレクト先のURLを適切に設定
      } else {
        // 他のエラーが発生した場合、エラーメッセージを表示またはログに記録するなどの処理を追加できます
        console.error("エラーが発生しました:", error);
      }
    }
  };

  const userData = user?.userData;
  const hobbyData = user?.hobbyData || [];
  const interestData = user?.interestData || [];
  const tagsData = user?.tagsData || [];

  useEffect(() => {
    // 初回のみデータを取得するようにする
    if (user === null) {
      handleGetEditUserData();
    }
  }, [user]);

  return (
    <>
      {userData && (
        <UserEditForm
          handleGetUserData={handleGetEditUserData}
          userData={userData}
          tagsData={tagsData}
        />
      )}
      <div className="border-t w-96 mx-auto mt-5 py-2">
        <p className="m-1">プレビュー</p>
      </div>
      {userData && (
        <UserEditItem
          myId={id}
          userId={""}
          handleGetUserData={handleGetEditUserData}
          userData={userData}
          hobbyData={hobbyData}
          interestData={interestData}
          tagsData={tagsData}
        />
      )}
    </>
  );
};

export default UserEdit;
