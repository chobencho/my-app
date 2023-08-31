import { Link } from "react-router-dom";
import { CommunityData } from "interfaces/index";

type CommunityProps = {
  community: CommunityData;
};

const CommunitiesItem = ({ community }: CommunityProps) => {
  return (
    <>
      <Link to={`/community/${community.id}`} className="block  py-1">
        <div className="bg-white rounded-xl  flex  dark:bg-gray-800 dark:border-gray-700 shadow-sm dark:shadow-slate-700/[.7]">
          <div className="w-2/5 sm:w-1/4 h-24 rounded-xl overflow-hidden sm:max-w-[15rem]">
            <img
              className="w-full h-full  object-cover "
              src={`${process.env.PUBLIC_URL}/images/community/${community.categoryId}_category.webp`}
              alt="Image Description"
            />
          </div>
          <div className="flex flex-wrap w-3/5 sm:w-3/4">
            <div className="px-5 py-2 flex flex-col h-full">
              <div className="mt-1 mb-1 sm:mt-1">
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {community.communityCode}カテゴリ
                </p>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white txt-limit-2">
                {community.title}
              </h3>
            </div>
          </div>
        </div>
        {/* <div className="flex">
          <img
            src={`${process.env.PUBLIC_URL}/images/community/${community.categoryId}_category.webp`}
            alt=""
            className="border rounded w-1/4 h-14 object-cover"
          />
          <div className="w-3/4 px-2">
            <p className="text-xs text-gray-500">
              {community.communityCode}カテゴリ
            </p>
            <p className="text-sm txt-limit-2">{community.title}</p>
          </div>
        </div> */}
      </Link>
    </>
  );
};

export default CommunitiesItem;
