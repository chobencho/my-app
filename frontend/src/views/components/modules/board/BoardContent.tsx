// Common
import { Link } from "react-router-dom";

// Interface
import { BoardData } from "interfaces/index";

import { makeStyles, Theme } from "@material-ui/core/styles";
import LikeButton from "views/components/modules/common/LikeButton";

import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

import CommonDeleteButton from "views/components/modules/common/CommonDeleteButton";

import UserCircleImage from "views/components/block/UserCircleImage";

type BoardContentProps = {
  board: BoardData;
  boardId: string;
  myId: string;
  handleGetBoardData: Function;
  generalId: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  boardImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  userImage: {
    width: "30px",
    height: "30px",
    objectFit: "cover",
    borderRadius: "20px",
  },
}));

const BoardContent = ({
  board,
  boardId,
  myId,
  handleGetBoardData,
  generalId,
}: BoardContentProps) => {
  const classes = useStyles();

  return (
    <>
      <UserCircleImage
        generalData={board}
        imageWidth={"100%"}
        imageHeight={"220px"}
        rounded={""}
        marginRight={""}
      />
      <div className="w-96 m-auto">
        <p className="text-xl my-2">{board.title}</p>
        <div className="flex justify-between">
          <Link to={`/user/${board.userId}`} className="flex my-auto">
            <img
              src={`http://localhost:3001/uploads/user/image/${board.userId}/${board.userImage}`}
              alt="boardData image"
              className={`${classes.userImage}`}
            />
            <div>
              <p className="text-xs ml-2 font-semibold">{board.name}</p>
              <p className="text-10 ml-2">
                {moment(board.createdAt).format("YYYY年MM月DD日 HH:mm")}
              </p>
            </div>
          </Link>

          <div className="relative">
            <LikeButton
              myId={myId}
              generalId={boardId}
              generalData={board}
              handleData={handleGetBoardData}
              discrimination={"board"}
            />
          </div>
        </div>

        <p className="whitespace-pre-wrap my-5 text-sm">{board.boardBody}</p>

        {myId === board.userId && (
          <CommonDeleteButton generalId={generalId} discrimination={"board"} />
        )}
      </div>
    </>
  );
};

export default BoardContent;
