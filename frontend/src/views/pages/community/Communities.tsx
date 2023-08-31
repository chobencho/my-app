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
  const [searchButtonActive, setSearchButtonActive] = useState<boolean>(true);
  const [joinButtonActive, setJoinButtonActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);
  // Id
  const { stringMyId } = useAuthData();

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

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      setShowSkeleton(false);
    }, 300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonLoaderCommunities />
      ) : (
        <>
          <div className="w-base m-auto py-5">
            <div className="flex justify-center mb-3 w-full">
              <div
                className={`w-1/2 sm:w-2/5 ${searchButtonActive ? "border border-blue-base" : "border"
                  }`}
              >
                <button
                  className={`w-full text-xs py-2 px-4 border-2 bg-gray-200 text-gray-600 ${searchButtonActive
                    ? "bg-blue-base text-white border-white"
                    : ""
                    }`}
                  onClick={handleSearchClick}
                >
                  コミュニティを探す
                </button>
              </div>
              <div
                className={`w-1/2 sm:w-2/5 ${joinButtonActive ? "border border-blue-base" : "border"
                  }`}
              >
                <button
                  className={`w-full text-xs py-2 px-4 border-2 bg-gray-200 text-gray-600 ${joinButtonActive
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
