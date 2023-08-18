import { useState, useEffect } from "react";
// Function
import { getMyFavBoards } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
// Components
import BoardsItem from "views/components/modules/board/BoardsItem";
import { useAuthData } from "views/components/modules/common/useAuthData";

const MyFav = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);
  // Id
  const { stringMyId } = useAuthData();

  // 自分がいいねした掲示板情報を取得
  const handleGetMyFavBoardData = async () => {
    getMyFavBoards(stringMyId).then((res) => setBoards(res.data));
  };

  useEffect(() => {
    handleGetMyFavBoardData();
  }, []);

  return (
    <>
      <BoardsItem
        boards={boards}
        handleGetBoardData={handleGetMyFavBoardData}
      />
    </>
  );
};

export default MyFav;
