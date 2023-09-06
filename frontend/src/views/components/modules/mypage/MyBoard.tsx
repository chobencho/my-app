import { useState, useEffect } from "react";
// Function
import { getMyBoards } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
// Components
import BoardsItem from "views/components/modules/board/BoardsItem";
import { useAuthData } from "views/components/modules/common/useAuthData";

export interface MyBoardProps {
  boards: BoardData[];
  handleBoardData: Function;
}

const MyBoard = ({ boards, handleBoardData }: MyBoardProps) => {
  return (
    <>
      <BoardsItem boards={boards} handleGetBoardData={handleBoardData} />
    </>
  );
};

export default MyBoard;
