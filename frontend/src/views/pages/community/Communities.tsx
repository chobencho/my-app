import { useEffect, useState } from "react";
// Interface
import { CommunityDataResponse } from "interfaces/index";
// Function
import { getCommunityData } from "lib/api/community";
// Components
import CommunitiesBranchSearch from "views/components/modules/community/CommunitiesBranchSearch";
import CommunitiesBranchJoin from "views/components/modules/community/CommunitiesBranchJoin";
import { useAuthData } from "views/components/modules/common/useAuthData";

import SkeletonLoaderCommunities from "views/components/modules/community/SkeletonLoaderCommunities";

const Communities = () => {
  const [data, setData] = useState<CommunityDataResponse | null>(null);
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
    const response = await getCommunityData(stringMyId);
    setData(response.data);
  };
  const allCommunityData = data?.allCommunity || [];
  const myCommunityData = data?.myCommunity || [];
  const latestCommunityData = data?.latestCommunity || [];
  const popularCommunityData = data?.popularCommunity || [];

  useEffect(() => {
    handleGetCommunityData();
  }, []);

  // タイムアウト用
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false); // データ取得完了後にisLoadingをfalseに設定
      setShowSkeleton(false); // データが取得されたらSkeletonを非表示に
    }, 300); // 遅延時間を調整（ここでは2000ミリ秒、つまり2秒）

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
                className={` ${
                  searchButtonActive ? "border border-blue-base" : "border"
                }`}
              >
                <button
                  className={`text-xs py-2 px-4 border-2 bg-gray-200 text-gray-600 ${
                    searchButtonActive
                      ? "bg-blue-base text-white border-white"
                      : ""
                  }`}
                  onClick={handleSearchClick}
                >
                  コミュニティを探す
                </button>
              </div>
              <div
                className={` ${
                  joinButtonActive ? "border border-blue-base" : "border"
                }`}
              >
                <button
                  className={`text-xs py-2 px-4 border-2 bg-gray-200 text-gray-600 ${
                    joinButtonActive
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
                allCommunityData={allCommunityData}
                latestCommunityData={latestCommunityData}
                popularCommunityData={popularCommunityData}
              />
            ) : (
              <CommunitiesBranchJoin myCommunityData={myCommunityData} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Communities;
