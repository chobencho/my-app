// Common
import { Link } from "react-router-dom";
// Interface
import { BoardData } from "interfaces/index";
// Components
import LikeButton from "views/components/modules/common/LikeButton";
import CommonDeleteButton from "views/components/modules/common/CommonDeleteButton";
import UserCircleImage from "views/components/block/UserCircleImage";
import OtherImage from "views/components/block/OtherImage";
import UserName from "views/components/block/UserName";
import UserBody from "views/components/block/UserBody";
import Moment from "views/components/block/Moment";
import moment from "moment";

type BoardContentProps = {
  board: BoardData;
  boardId: string;
  myId: string;
  handleGetBoardData: Function;
  generalId: string;
};

const BoardContent = ({
  board,
  boardId,
  myId,
  handleGetBoardData,
  generalId,
}: BoardContentProps) => {
  return (
    <>
      <UserCircleImage
        generalData={board}
        imageWidth={"100%"}
        imageHeight={"220px"}
        maxImageHeight={""}
        rounded={""}
        marginRight={""}
      />
      <div className="w-base m-auto">
        <p className="text-xl my-2">{board.title}</p>
        <div className="flex justify-between">
          <Link to={`/user/${board.userId}`} className="flex my-auto items-center ">
            {board.image !== null ? (
              <img
                src={`http://localhost:3001/uploads/user/image/${board.userId}/${board.userImage}`}
                alt="boardData image"
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full" />
            ) : (
              <img src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
                alt="boardData image"
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full"
              />

            )}
            <div>
              <p className="text-xs sm:text-base pl-2">
                {board.name}
              </p>
              <p className="text-10 pl-2">
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

        <UserBody
          body={board.boardBody}
          margin={"20px 0"}
          fontSize={"14px"}
          classes={"whitespace-pre-wrap"}
        />

        {myId === board.userId && (
          <CommonDeleteButton generalId={generalId} discrimination={"board"} />
        )}
      </div>
    </>
  );
};

export default BoardContent;
