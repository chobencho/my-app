// Common
import { useEffect, useState } from "react";
// Function
import { getBoards } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
// Components
import BoardsItem from "views/components/modules/board/BoardsItem";
import { useAuthData } from "views/components/modules/common/useAuthData";
import SkeletonLoaderBoards from "views/components/modules/board/SkeletonLoaderBoards";
import PageTitle from "views/components/block/PageTitle";
import VariousButton from "views/components/block/VariousButton";

const Boards = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);
  const { verifiedAge } = useAuthData();
  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const handleGetBoardData = async () => {
    getBoards().then((res) => {
      setBoards(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    handleGetBoardData();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowSkeleton(false);
    }, 200);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonLoaderBoards />
      ) : (
        <div className="w-96 m-auto">
          <PageTitle
            title={"掲示板一覧"}
            padding={"10px"}
            classes={"text-center"}
          />
          {boards && (
            <>
              <BoardsItem
                boards={boards}
                handleGetBoardData={handleGetBoardData}
              />
            </>
          )}
          <VariousButton
            buttonTitle={"新規作成"}
            toLink={"/boardCreate"}
            verifiedAge={verifiedAge}
          />
        </div>
      )}
    </>
  );
};

export default Boards;
