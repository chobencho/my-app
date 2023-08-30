import { useEffect, useState } from "react";
// Function
import { getUserData } from "lib/api/user";
import { getCommonRoomId } from "lib/api/common";
// Interface
import { UserDataResponse } from "interfaces/index";
// Components
import UserItem from "views/components/modules/user/UserItem";
import CommonEditButton from "views/components/modules/common/CommonEditButton";
import { useAuthData } from "views/components/modules/common/useAuthData";
import SkeletonLoaderUser from "views/components/modules/user/SkeletonLoaderUser";

const User = () => {
  // State
  const [user, setUser] = useState<UserDataResponse | null>(null);
  const [commonRoomId, setCommonRoomId] = useState<string | null>(null);
  // Id
  const { stringMyId, verifiedAge, id } = useAuthData();

  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  // ユーザ情報を取得
  const handleGetUserData = async () => {
    try {
      const res = await getUserData(id);
      setUser(res.data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const handleGetCommonRoom = async () => {
    try {
      const res = await getCommonRoomId(id, stringMyId);
      setCommonRoomId(res.data);
    } catch (error) {
      console.error("Failed to fetch common room id:", error);
    }
  };

  const userData = user?.userData;
  const hobbyData = user?.hobbyData || [];
  const interestData = user?.interestData || [];
  const tagsData = user?.tagsData || [];

  useEffect(() => {
    handleGetUserData();
    handleGetCommonRoom();
  }, []);

  // タイムアウト用
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      setShowSkeleton(false);
    }, 500);

    return () => clearTimeout(delay);
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
              tagsData={tagsData}
            />
          )}
          {userData && (
            <>
              <CommonEditButton
                userId={id || ""}
                myId={stringMyId || ""}
                generalId={id || ""}
                verifiedAge={verifiedAge}
                commonRoomId={commonRoomId || ""}
                discrimination={"user"}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default User;
