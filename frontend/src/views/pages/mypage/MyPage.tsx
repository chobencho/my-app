// Common
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Interface
import { UserDataResponse } from "interfaces/index";
// Function
import { getEditUserData } from "lib/api/user";
// Components
import Setting from "views/pages/mypage/Setting";
import Information from "views/pages/mypage/Information";
import MyBoard from "views/pages/mypage/MyBoard";
import MyFav from "views/pages/mypage/MyFav";
import { useAuthData } from "views/components/modules/common/useAuthData";
import SkeletonLoaderMyPage from "views/components/modules/mypage/SkeletonLoaderMyPage";
import UserCircleImage from "views/components/block/UserCircleImage";
import UserName from "views/components/block/UserName";
import MyPageButton from "views/components/block/MyPageButton";

const MyPage = () => {
  const navigate = useNavigate();
  // State
  const [user, setUser] = useState<UserDataResponse | null>(null);
  const [settingButtonActive, setSettingButtonActive] = useState<boolean>(true);
  const [myBoardButtonActive, setMyBoardButtonActive] =
    useState<boolean>(false);
  const [likeBoardButtonActive, setLikeBoardButtonActive] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);
  // Id
  const { id } = useAuthData();

  const handleSettingClick = () => {
    setSettingButtonActive(true);
    setMyBoardButtonActive(false);
    setLikeBoardButtonActive(false);
  };

  const handleMyBoardClick = () => {
    setSettingButtonActive(false);
    setMyBoardButtonActive(true);
    setLikeBoardButtonActive(false);
  };

  const handleLikeBoardClick = () => {
    setSettingButtonActive(false);
    setMyBoardButtonActive(false);
    setLikeBoardButtonActive(true);
  };

  const handleGetUserData = async () => {
    try {
      const res = await getEditUserData(id);
      setUser(res.data);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        navigate("/error");
      } else {
        console.error("エラーが発生しました:", error);
      }
    }
  };

  const userData = user?.userData;

  useEffect(() => {
    if (user === null) {
      handleGetUserData();
    }
  }, [user]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      setShowSkeleton(false);
    }, 200);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonLoaderMyPage />
      ) : (
        <>
          <div className="p-5">
            {userData && (
              <>
                <UserCircleImage
                  generalData={userData}
                  imageWidth={"144px"}
                  imageHeight={"144px"}
                  maxImageHeight={""}
                  rounded={"999px"}
                  marginRight={""}
                />
                <div className="text-center">
                  <UserName
                    name={userData.name}
                    pcFontSize={"20px"}
                    spFontSize={"20px"}
                    fontWeight={0}
                    margin={"2px"}
                    option={""}
                  />
                </div>

                <p className="text-sm text-center">
                  {userData.age}歳 {userData.prefectureCode}
                </p>
              </>
            )}
          </div>
          <div className="flex w-full pb-5 px-3">
            <MyPageButton
              toLink={`/user/${id}/edit`}
              buttonTitle={"プロフィール編集"}
            />
            <MyPageButton toLink={`/verification`} buttonTitle={"年齢確認"} />
          </div>
          <div className="flex justify-between py-3">
            <div
              className={`w-1/3 text-center border-b p-1 ${
                settingButtonActive ? "border-b border-blue-base" : null
              }`}
            >
              <button className="text-base" onClick={handleSettingClick}>
                各種設定
              </button>
            </div>
            <div
              className={`w-1/3 text-center border-b p-1 ${
                myBoardButtonActive ? "border-b border-blue-base" : null
              }`}
            >
              <button className="text-base" onClick={handleMyBoardClick}>
                自分の掲示板
              </button>
            </div>
            <div
              className={`w-1/3 text-center border-b p-1 ${
                likeBoardButtonActive ? "border-b border-blue-base" : null
              }`}
            >
              <button className="text-base" onClick={handleLikeBoardClick}>
                いいね
              </button>
            </div>
          </div>

          {settingButtonActive && (
            <div className="w-base m-auto">
              <Information />
              <Setting />
            </div>
          )}

          {myBoardButtonActive && (
            <div className="w-base m-auto">
              <MyBoard />
            </div>
          )}

          {likeBoardButtonActive && (
            <div className="w-base m-auto">
              <MyFav />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MyPage;
