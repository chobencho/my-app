import { useState, useEffect } from "react";
// Function
import { getEditBoardData } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
// Components
import BoardEditForm from "views/components/modules/board/BoardEditForm";
import BoardEditItem from "views/components/modules/board/BoardEditItem";
import { useAuthData } from "views/components/modules/common/useAuthData";

const BoardEdit = () => {
  // State
  const [boardData, setBoardData] = useState<BoardData | null>(null);
  // Id
  const { id } = useAuthData();

  // 掲示板情報を取得
  const handleGetBoardData = async () => {
    getEditBoardData(id).then((res) => setBoardData(res.data));
  };

  useEffect(() => {
    handleGetBoardData();
  }, []);

  return (
    <>
      <p className="text-center py-3">掲示板編集</p>
      {boardData !== null && (
        <>
          {/* 掲示板編集フォーム */}
          <BoardEditForm
            id={id || ""}
            handleGetBoardData={handleGetBoardData}
            boardData={boardData}
          />
          <div className="border-t w-96 mx-auto mt-5 py-2">
            <p className="m-1">プレビュー</p>
          </div>
          {/* 掲示板プレビュー */}
          <BoardEditItem boardData={boardData} />
        </>
      )}
    </>
  );
};

export default BoardEdit;
