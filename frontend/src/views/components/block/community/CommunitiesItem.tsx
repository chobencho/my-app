import { Link } from 'react-router-dom';
import { CommunityData } from 'interfaces/index';

type CommunityProps = {
    community: CommunityData;
};

const CommunitiesItem = ({ community }: CommunityProps) => {
    return (
        <>
            <Link to={`/community/${community.id}`} className="block  py-1">
                <div className="border-gray-200 bg-white rounded-xl flex shadow-sm shadow-slate-500/[.7]">
                    <div className="w-2/5 sm:w-2/5 h-24 rounded-l-xl overflow-hidden sm:max-w-[15rem]">
                        <img
                            className="w-full h-full object-cover "
                            src={`${process.env.PUBLIC_URL}/images/community/${community.categoryId}_category.webp`}
                            alt="Image Description"
                        />
                    </div>
                    <div className="flex flex-wrap w-3/5 sm:w-3/4">
                        <div className="px-5 py-2 flex flex-col h-full">
                            <div className="mt-1 mb-1 sm:mt-1">
                                <p className="text-xs text-gray-800">
                                    {community.communityCode}カテゴリ
                                </p>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 txt-limit-2">
                                {community.title}
                            </h3>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default CommunitiesItem;
