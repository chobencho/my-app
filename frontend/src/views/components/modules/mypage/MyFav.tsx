import { useState, useEffect } from "react";
// Function
import { getMyFavBoards } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
// Components
import BoardsItem from "views/components/modules/board/BoardsItem";
import { useAuthData } from "views/components/modules/common/useAuthData";

export interface MyFavProps {
  boards: BoardData[];
  handleBoardData: Function;
}

const MyFav = ({ boards, handleBoardData }: MyFavProps) => {
  return (
    <>
      <BoardsItem boards={boards} handleGetBoardData={handleBoardData} />
    </>
  );
};

export default MyFav;
