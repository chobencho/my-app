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

import SkeletonLoaderUser from "views/components/modules/user/SkeletonLoaderUser";


const User = () => {
  // State
  const [userData, setUserData] = useState<UserData | null>(null);
  const [hobbyData, setHobbyData] = useState<UserHobbyData[]>([]);
  const [interestData, setInterestData] = useState<UserInterestData[]>([]);
  const [researchTagData, setResearchTagData] = useState<UserTagData[]>([]);
  const [commonRoomId, setCommonRoomId] = useState<string | null>(null);
  // Id
  const { stringMyId, verifiedAge, id } = useAuthData();

  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);


  // ユーザ情報を取得
  const handleGetUserData = async () => {
    try {
      const res = await getUserData(id);
      setUserData(res.data);
    } catch (error) {
      // エラーハンドリングを追加
      console.error("Failed to fetch user data:", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [userDataRes, hobbyDataRes, interestDataRes, researchTagDataRes, commonRoomIdRes] = await Promise.all([
          getUserData(id),
          getHobbyData(id),
          getInterestData(id),
          getResearchTagData(id),
          getCommonRoomId(id, stringMyId),
        ]);

        setUserData(userDataRes.data);
        setHobbyData(hobbyDataRes.data);
        setInterestData(interestDataRes.data);
        setResearchTagData(researchTagDataRes.data);
        setCommonRoomId(commonRoomIdRes.data);
      } catch (error) {
        // エラーハンドリングを追加
        console.error("Failed to fetch data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id, stringMyId]); // 依存性のリストを更新

  // タイムアウト用
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      setShowSkeleton(false); // データが取得されたらSkeletonを非表示に
    }, 800); // 遅延時間を調整（ここでは2000ミリ秒、つまり2秒）

    return () => clearTimeout(delay); // コンポーネントがアンマウントされたらタイマーをクリア
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonLoaderUser />
      ) : (
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
          {userData && (
            <CommonEditButton
              userId={id || ""}
              myId={stringMyId || ""}
              generalId={id || ""}
              verifiedAge={verifiedAge}
              commonRoomId={commonRoomId || ""}
              discrimination={"user"}
            />
          )}
        </div>
      )}
    </>
  );
};

export default User;
