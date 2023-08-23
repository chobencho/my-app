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
        rounded={""}
        marginRight={""}
      />
      <div className="w-96 m-auto">
        <p className="text-xl my-2">{board.title}</p>
        <div className="flex justify-between">
          <Link to={`/user/${board.userId}`} className="flex my-auto">
            <OtherImage
              url={`http://localhost:3001/uploads/user/image/${board.userId}/${board.userImage}`}
              imageWidth={"30px"}
              imageHeight={"30px"}
              borderRadius={"20px"}
            />
            <div>
              <UserName
                name={board.name}
                fontSize={"12px"}
                fontWeight={600}
                margin={"0 0 0 8px"}
              />
              <Moment
                time={board.createdAt}
                format={"YYYY年MM月DD日 HH:mm"}
                fontSize={"10px"}
                margin={"0 0 0 8px"}
                classes={""}
              />
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
