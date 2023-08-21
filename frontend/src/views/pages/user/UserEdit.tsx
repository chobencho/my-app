import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Function
import { getEditUserData } from "lib/api/user";
import { getHobbyData } from "lib/api/user";
import { getInterestData } from "lib/api/user";
import { getResearchTagData } from "lib/api/user";
// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
// Components
import UserEditForm from "views/components/modules/user/UserEditForm";
import UserEditItem from "views/components/modules/user/UserEditItem";

const UserEdit = () => {
  // State
  const [userData, setUserData] = useState<UserData | null>(null);
  const [hobbyData, setHobbyData] = useState<UserHobbyData[]>([]);
  const [interestData, setInterestData] = useState<UserInterestData[]>([]);
  const [researchTagData, setResearchTagData] = useState<UserTagData[]>([]);
  // Id
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  // ユーザ情報取得
  const handleGetUserData = async () => {
    try {
      // Promise.allを使ってすべての非同期処理が完了するのを待つ
      const [userDataRes, hobbyDataRes, interestDataRes, researchTagDataRes] =
        await Promise.all([
          getEditUserData(id),
          getHobbyData(id),
          getInterestData(id),
          getResearchTagData(id),
        ]);

      setUserData(userDataRes.data);
      setHobbyData(hobbyDataRes.data);
      setInterestData(interestDataRes.data);
      setResearchTagData(researchTagDataRes.data);
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

  useEffect(() => {
    // 初回のみデータを取得するようにする
    if (userData === null) {
      handleGetUserData();
    }
  }, [userData]);

  return (
    <>
      {userData !== null && (
        <>
          {/* ユーザ編集フォーム */}
          <UserEditForm
            handleGetUserData={handleGetUserData}
            userData={userData}
            userResearchTagData={researchTagData}
          />

          <div className="border-t w-96 mx-auto mt-5 py-2">
            <p className="m-1">プレビュー</p>
          </div>

          {/* ユーザプレビュー */}
          <UserEditItem
            myId={id}
            userId={""}
            handleGetUserData={handleGetUserData}
            userData={userData}
            hobbyData={hobbyData}
            interestData={interestData}
            researchTagData={researchTagData}
          />
        </>
      )}
    </>
  );
};

export default UserEdit;
