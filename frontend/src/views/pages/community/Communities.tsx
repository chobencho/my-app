import { useEffect, useState } from "react";
// Interface
import { CommunityData } from "interfaces/index";
// Function
import { getAllCommunityData } from "lib/api/community";
import { getPopularCommunityData } from "lib/api/community";
import { getNewCommunityData } from "lib/api/community";
import { getMyCommunityData } from "lib/api/community";
// Components
import CommunitiesBranchSearch from "views/components/modules/community/CommunitiesBranchSearch";
import CommunitiesBranchJoin from "views/components/modules/community/CommunitiesBranchJoin";
import { useAuthData } from "views/components/modules/common/useAuthData";

import SkeletonLoaderCommunities from "views/components/modules/community/SkeletonLoaderCommunities";

const Communities = () => {
  const [allCommunity, setAllCommunity] = useState<CommunityData[]>([]);
  const [popularCommunity, setPopularCommunity] = useState<CommunityData[]>([]);
  const [newCommunity, setNewCommunity] = useState<CommunityData[]>([]);
  const [myCommunity, setMyCommunity] = useState<CommunityData[]>([]);
  const [searchButtonActive, setSearchButtonActive] = useState(true);
  const [joinButtonActive, setJoinButtonActive] = useState(false);

  const { stringMyId } = useAuthData();

  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true); // タイムアウト用


  const handleSearchClick = () => {
    setSearchButtonActive(true);
    setJoinButtonActive(false);
  };

  const handleJoinClick = () => {
    setSearchButtonActive(false);
    setJoinButtonActive(true);
  };

  const handleGetCommunityData = async () => {
    try {
      const [
        allCommunityRes,
        popularCommunityRes,
        newCommunityRes,
        myCommunityRes,
      ] = await Promise.all([
        getAllCommunityData(),
        getPopularCommunityData(),
        getNewCommunityData(),
        getMyCommunityData(stringMyId),
      ]);

      setAllCommunity(allCommunityRes.data);
      setPopularCommunity(popularCommunityRes.data);
      setNewCommunity(newCommunityRes.data);
      setMyCommunity(myCommunityRes.data);

    } catch (error) {
      console.error("Failed to fetch community data:", error);
    }
  };

  useEffect(() => {
    handleGetCommunityData();
  }, [stringMyId]);


  // タイムアウト用
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false); // データ取得完了後にisLoadingをfalseに設定
      setShowSkeleton(false); // データが取得されたらSkeletonを非表示に
    }, 1000); // 遅延時間を調整（ここでは2000ミリ秒、つまり2秒）

    return () => clearTimeout(delay); // コンポーネントがアンマウントされたらタイマーをクリア
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonLoaderCommunities />
      ) : (
        <>
          <div className="w-96 m-auto py-5">
            <div className="flex justify-center mb-3">
              <div
                className={` ${searchButtonActive ? "border border-blue-base" : "border"
                  }`}
              >
                <button
                  className={`text-xs py-2 px-4 border-2 bg-gray-200 text-gray-600 ${searchButtonActive ? "bg-blue-base text-white border-white" : ""
                    }`}
                  onClick={handleSearchClick}
                >
                  コミュニティを探す
                </button>
              </div>
              <div
                className={` ${joinButtonActive ? "border border-blue-base" : "border"
                  }`}
              >
                <button
                  className={`text-xs py-2 px-4 border-2 bg-gray-200 text-gray-600 ${joinButtonActive
                    ? "bg-blue-base text-white border-2 border-white"
                    : ""
                    }`}
                  onClick={handleJoinClick}
                >
                  参加中のコミュニティ
                </button>
              </div>
            </div>

            {searchButtonActive ? (
              <CommunitiesBranchSearch
                allCommunity={allCommunity}
                popularCommunity={popularCommunity}
                newCommunity={newCommunity}
              />
            ) : (
              <CommunitiesBranchJoin myCommunity={myCommunity} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Communities;
