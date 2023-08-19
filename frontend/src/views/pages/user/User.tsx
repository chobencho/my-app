import { useEffect, useState } from "react";
// Function
import { getUserData } from "lib/api/user";
import { getHobbyData } from "lib/api/user";
import { getInterestData } from "lib/api/user";
import { getResearchTagData } from "lib/api/user";
import { getCommonRoomId } from "lib/api/common";
// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
// Components
import UserItem from "views/components/modules/user/UserItem";
import CommonEditButton from "views/components/modules/common/CommonEditButton";
import { useAuthData } from "views/components/modules/common/useAuthData";
// import SendMessageButton from "views/components/modules/common/SendMessageButton";

const User = () => {
  // State
  const [userData, setUserData] = useState<UserData | null>(null);
  const [hobbyData, setHobbyData] = useState<UserHobbyData[]>([]);
  const [interestData, setInterestData] = useState<UserInterestData[]>([]);
  const [researchTagData, setResearchTagData] = useState<UserTagData[]>([]);
  const [commonRoomId, setCommonRoomId] = useState<string | null>(null);
  // Id
  const { stringMyId, verifiedAge, id } = useAuthData();

  // ユーザ情報を取得
  const handleGetUserData = async () => {
    getUserData(id).then((res) => setUserData(res.data));
  };
  // ユーザ趣味情報を取得
  const handleGetHobbyData = async () => {
    getHobbyData(id).then((res) => setHobbyData(res.data));
  };
  // ユーザ興味情報を取得
  const handleGetInterestData = async () => {
    getInterestData(id).then((res) => setInterestData(res.data));
  };
  // ユーザ研究タグ情報取得
  const handleGetResearchTagData = async () => {
    getResearchTagData(id).then((res) => setResearchTagData(res.data));
  };

  // 自分と相手のチャットルームがすでに存在するか確認する関数
  const handleGetCommonRoomId = () => {
    getCommonRoomId(id, stringMyId).then((res) => setCommonRoomId(res.data));
  };

  useEffect(() => {
    handleGetUserData();
    handleGetHobbyData();
    handleGetInterestData();
    handleGetResearchTagData();
    handleGetCommonRoomId();
  }, []);

  return (
    <>
      <div className="pb-16">
        {userData && (
          <UserItem
            myId={stringMyId}
            userId={id}
            handleGetUserData={handleGetUserData}
            userData={userData}
            hobbyData={hobbyData}
            interestData={interestData}
            researchTagData={researchTagData}
          />
        )}
        <CommonEditButton
          userId={id || ""}
          myId={stringMyId || ""}
          generalId={id || ""}
          verifiedAge={verifiedAge}
          commonRoomId={commonRoomId || ""}
          discrimination={"user"}
        />
      </div>
    </>
  );
};

export default User;
