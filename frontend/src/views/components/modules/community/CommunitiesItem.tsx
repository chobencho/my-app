import { Link } from "react-router-dom";
import { CommunityData } from "interfaces/index";

type CommunityProps = {
  community: CommunityData;
};

const CommunitiesItem = ({ community }: CommunityProps) => {
  return (
    <>
      <Link to={`/community/${community.id}`} className="block border-b py-2">
        <div className="flex">
          <img
            src={`${process.env.PUBLIC_URL}/images/community/${community.categoryId}_category.jpg`}
            alt=""
            className="border rounded w-1/4 h-14 object-cover"
          />
          <div className="w-3/4 px-2">
            <p className="text-xs text-gray-500">
              {community.communityCode}カテゴリ
            </p>
            <p className="text-sm txt-limit-2">{community.title}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CommunitiesItem;
