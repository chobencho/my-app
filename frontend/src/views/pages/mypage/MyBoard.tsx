import { useEffect, useState } from "react";
// Function
import { getMyBoards } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
// Components
import BoardsItem from "views/components/modules/board/BoardsItem";
import { useAuthData } from "views/components/modules/common/useAuthData";

const MyBoard = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);
  // Id
  const { id } = useAuthData();

  // 掲示板情報を取得
  const handleGetBoardData = async () => {
    getMyBoards(id).then((res) => setBoards(res.data));
  };

  useEffect(() => {
    handleGetBoardData();
  }, []);

  return (
    <>
      <BoardsItem boards={boards} handleGetBoardData={handleGetBoardData} />
    </>
  );
};

export default MyBoard;
