// Common
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// Interface
import { CommunityData } from "interfaces/index";
// Function
import { withdrawCommunity } from "lib/api/community";
// Style
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import TocIcon from "@mui/icons-material/Toc";
import { makeStyles, Theme } from "@material-ui/core/styles";

export interface CommunityProps {
  community: CommunityData;
  community_id: string | undefined;
  user_id: string | undefined;
}

const useStyles = makeStyles((theme) => ({
  mainContent: {
    top: 47,
    left: 0,
    display: "flex",
    width: "100%",
    padding: "8px 10px 5px",
    background: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    alignItems: "center",
  },
  slideUpContent: {
    top: -140,
    left: 0,
    height: "230px",
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.2)",
    transform: "translateY(0)",
    transition: "transform 0.3s ease-in-out",
    zIndex: 0,
  },
  slideUpContentActive: {
    transform: "translateY(100%)",
  },
}));

const CommunityTop = ({ community, community_id, user_id }: CommunityProps) => {
  const [showSlideUpContent, setShowSlideUpContent] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  // コミュニティ概要表示・非表示機能
  const handleToggleSlideUpContent = () => {
    setShowSlideUpContent((prev) => !prev);
  };

  // コミュニティ退会機能
  const handleWithdrawCommunity = async () => {
    withdrawCommunity(community_id, user_id).then(() =>
      navigate("/communities")
    );
  };

  return (
    <>
      <div className="fixed top-12 bg-white w-full sm:h-14 flex justify-between items-center max-w-540 p-2 z-10">
        <div className="flex items-center">
          <span
            onClick={() => navigate("/communities")}
            className="flex items-center mr-2"
          >
            <ExpandCircleDownOutlinedIcon className="rotate-90" />
          </span>

          <img
            src={`${process.env.PUBLIC_URL}/images/community/${community.id}_category.webp`}
            alt=""
            className="w-12 h-8 object-cover rounded mr-2"
          />
          <p className="txt-limit-1 text-sm mr-1">{community.title}</p>
        </div>
        <div>
          <TocIcon onClick={handleToggleSlideUpContent} />
        </div>
      </div>

      <div
        className={`fixed bg-white border-b border-gray-200 p-5 sm:px-12 sm:py-8 max-w-540 slide-up-content  ${showSlideUpContent ? classes.slideUpContentActive : ""
          }`}
      >
        <h4 className="text-sm sm:text-base py-1 font-semibold">コミュニティ概要</h4>
        <p className="text-sm">{community.body}</p>
        <h4 className="text-sm sm:text-base py-1 mt-2 font-semibold">カテゴリ</h4>
        <p className="text-sm">{community.communityCode}</p>
        <div className="w-full text-center">
          <button
            className="bg-red-600 text-white px-5 py-1 mx-auto my-5 text-sm sm:text-base"
            onClick={() => handleWithdrawCommunity()}
          >
            このコミュニティを退会する
          </button>
        </div>
      </div>
    </>
  );
};

export default CommunityTop;
