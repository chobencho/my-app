import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthData } from "views/components/modules/common/useAuthData";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
import { getEditUserData } from "lib/api/user";
import { UserData } from "interfaces/index";

import Setting from "views/pages/mypage/Setting";
import Information from "views/pages/mypage/Information";
import MyBoard from "views/pages/mypage/MyBoard";
import MyFav from "views/pages/mypage/MyFav";

import SkeletonLoaderMyPage from "views/components/modules/mypage/SkeletonLoaderMyPage"


const useStyles = makeStyles((theme: Theme) => ({}));

const MyPage = () => {
  const classes = useStyles();
  // Id
  const { id } = useAuthData();

  const [userData, setUserData] = useState<UserData | null>(null);

  const [settingButtonActive, setSettingButtonActive] = useState<boolean>(true);
  const [myBoardButtonActive, setMyBoardButtonActive] =
    useState<boolean>(false);
  const [likeBoardButtonActive, setLikeBoardButtonActive] =
    useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(true);

  const [showSkeleton, setShowSkeleton] = useState(true); // タイムアウト用

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

  // ユーザ情報を取得
  const handleGetUserData = async () => {
    getEditUserData(id).then((res) => setUserData(res.data));
  };

  useEffect(() => {
    // 初回のみデータを取得するようにする
    if (userData === null) {
      handleGetUserData();
    }
  }, [userData]);

  // タイムアウト用
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      setShowSkeleton(false); // データが取得されたらSkeletonを非表示に
    }, 200); // 遅延時間を調整（ここでは2000ミリ秒、つまり2秒）

    return () => clearTimeout(delay); // コンポーネントがアンマウントされたらタイマーをクリア
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
                {userData.image?.url ? (
                  <img
                    src={userData.image.url}
                    alt="user image"
                    className="h-36 w-36 object-cover rounded-full m-auto"
                  />
                ) : null}
                <p className="text-xl text-center pt-1">{userData.name}</p>
                <p className="text-sm text-center">
                  {userData.age}歳 {userData.prefectureCode}
                </p>
              </>
            )}
          </div>
          <div className="flex w-full pb-5 px-3">
            <Link
              to={`/user/${id}/edit`}
              className="inline-block w-1/2 text-sm text-center"
            >
              <button className="w-90 bg-gray-600 text-white p-3 rounded-full">
                プロフィール編集
              </button>
            </Link>
            <Link
              to="/verification"
              className="inline-block w-1/2 text-sm text-center"
            >
              <button className="w-90 bg-gray-600 text-white p-3 rounded-full">
                年齢確認
              </button>
            </Link>
          </div>
          <div className="flex justify-between py-3">
            <div
              className={`w-1/3 text-center border-b p-1 ${settingButtonActive ? "border-b border-blue-base" : null
                }`}
            >
              <button className="text-base" onClick={handleSettingClick}>
                各種設定
              </button>
            </div>
            <div
              className={`w-1/3 text-center border-b p-1 ${myBoardButtonActive ? "border-b border-blue-base" : null
                }`}
            >
              <button className="text-base" onClick={handleMyBoardClick}>
                自分の掲示板
              </button>
            </div>
            <div
              className={`w-1/3 text-center border-b p-1 ${likeBoardButtonActive ? "border-b border-blue-base" : null
                }`}
            >
              <button className="text-base" onClick={handleLikeBoardClick}>
                いいね
              </button>
            </div>
          </div>

          {settingButtonActive && (
            <div className="w-96 m-auto">
              <Information />
              <Setting />
            </div>
          )}

          {myBoardButtonActive && (
            <div className="w-96 m-auto">
              <MyBoard />
            </div>
          )}

          {likeBoardButtonActive && (
            <div className="w-96 m-auto">
              <MyFav />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MyPage;
