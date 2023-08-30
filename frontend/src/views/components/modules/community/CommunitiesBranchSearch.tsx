// Common
import { useState } from "react";
// Interface
import { CommunityData } from "interfaces/index";
// Components
import CommunitiesItem from "views/components/modules/community/CommunitiesItem";
import ModalCategoryCommunity from "views/components/modules/community/ModalCategoryCommunity";
import CommunityCreate from "views/components/modules/community/CommunityCreate";
import PageTitle from "views/components/block/PageTitle";
import CommunityBlock from "views/components/block/CommunityBlock";

// Style
import Category from "options/category";

type CommunityProps = {
  allCommunityData: CommunityData[];
  latestCommunityData: CommunityData[];
  popularCommunityData: CommunityData[];
};

const CommunitiesBranchSearch = ({
  allCommunityData,
  latestCommunityData,
  popularCommunityData,
}: CommunityProps) => {
  // State
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [strSelectedCategory, setStrSelectedCategory] = useState("");
  const [selectedCategoryData, setSelectedCategoryData] = useState<
    CommunityData[]
  >([]);

  const handleDisplayCategoryCommunity = (value: string, category: string) => {
    setSelectedCategory(value);
    setStrSelectedCategory(category);
    const categoryData = allCommunityData.filter(
      (com) => String(com.categoryId) === value
    );
    setSelectedCategoryData(categoryData);
    setShowModal(true);
  };

  return (
    <>
      <PageTitle
        title={"カテゴリから探す"}
        padding={"8px 0 6px"}
        classes={"text-center"}
      />

      <div className=" flex flex-wrap px-3">
        {Category.CAT_OPTIONS.map((option) => {
          const stringValue = String(option[0]);
          const stringCategory = String(option[1]);
          return (
            <button
              key={option[0]}
              value={option[0]}
              className="flex-shrink-0 group w-1/3 flex items-center justify-center mt-3"
              onClick={() =>
                handleDisplayCategoryCommunity(stringValue, stringCategory)
              }
            >
              <div className="flex items-center">
                <img
                  className="inline-block object-cover flex-shrink-0 h-[3rem] w-[3rem] sm:h-[3.875rem] sm:w-[3.875rem] rounded-full"
                  src={`${process.env.PUBLIC_URL}/images/community/${option[2]}`}
                  alt="Image Description"
                />
                <div className="ml-3">
                  <h3 className="text-sm sm:text-base text-gray-800 dark:text-white">
                    {option[1]}
                  </h3>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <CommunityBlock
        title={"人気コミュニティ"}
        padding={"8px 0 6px"}
        margin={"10px 0 0 0"}
        classes={"text-center"}
        generalData={popularCommunityData}
      />

      <CommunityBlock
        title={"新着コミュニティ"}
        padding={"8px 0 6px"}
        margin={"10px 0 0 0"}
        classes={"text-center"}
        generalData={latestCommunityData}
      />

      <CommunityCreate />

      {showModal ? (
        <ModalCategoryCommunity
          setShowModal={setShowModal}
          selectedCategoryData={selectedCategoryData}
          strSelectedCategory={strSelectedCategory}
        />
      ) : null}
    </>
  );
};

export default CommunitiesBranchSearch;
