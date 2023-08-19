import { useEffect, useState } from "react";
// Function
import { getBoardData } from "lib/api/board";
import { getBoardComment } from "lib/api/boardComment";
import { getCommonRoomId } from "lib/api/common";
// Interface
import { BoardData } from "interfaces/index";
import { CommentData } from "interfaces/index";
// Components
import CommonEditButton from "views/components/modules/common/CommonEditButton";
import LikeButton from "views/components/modules/common/LikeButton";
// import GoBackButton from "views/components/modules/common/GoBackButton";
import BoardContent from "views/components/modules/board/BoardContent";
import CommentItem from "views/components/modules/board/CommentItem";
import CommonMessageForms from "views/components/modules/common/CommonMessageForms";
import { useAuthData } from "views/components/modules/common/useAuthData";

const Board = () => {
  // State
  const [board, setBoard] = useState<BoardData | null>(null);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [commonRoomId, setCommonRoomId] = useState<string | null>(null);
  // Id
  const { stringMyId, id, verifiedAge } = useAuthData();

  // 掲示板情報を取得
  const handleGetBoardData = async () => {
    getBoardData(id).then((res) => {
      setBoard(res.data);
      handleGetCommonRoomId(res.data.userId);
    });
  };
  // コメント情報を取得
  const handleGetBoardComment = async () => {
    getBoardComment(id).then((res) => setComments(res.data));
  };

  // 自分と相手のチャットルームがすでに存在するか確認する関数
  const handleGetCommonRoomId = (userId: string) => {
    getCommonRoomId(userId, stringMyId).then((res) =>
      setCommonRoomId(res.data)
    );
  };

  useEffect(() => {
    handleGetBoardData();
  }, [id]);

  useEffect(() => {
    handleGetBoardComment();
  }, [board]);

  return (
    <>
      {board && (
        <>
          <div>
            {/* 掲示板表示 */}
            <BoardContent
              board={board}
              handleGetBoardData={handleGetBoardData}
              boardId={board.id.toString()}
              myId={stringMyId || ""}
              generalId={id || ""}
            />

            {/* チャット開始ボタン || 掲示板編集ボタン */}
            <CommonEditButton
              userId={board.userId || ""}
              myId={stringMyId || ""}
              generalId={id || ""}
              verifiedAge={verifiedAge}
              commonRoomId={commonRoomId || ""}
              discrimination={"board"}
            />

            {/* 戻るボタン */}
            {/* <GoBackButton /> */}

            {/* コメントフォーム */}
            <div className="border-b border-t w-96 mx-auto py-2">
              <p className="m-1">コメント</p>
              <CommonMessageForms
                handleGetData={handleGetBoardComment}
                id={id ?? ""}
                stringMyId={stringMyId ?? ""}
                discrimination={"board"}
              />
            </div>

            {/* コメント欄 */}
            {comments.map((comment: CommentData) => (
              <CommentItem comment={comment} key={comment.commentId} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Board;
