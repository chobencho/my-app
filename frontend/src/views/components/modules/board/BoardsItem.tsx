// Common
import { Link } from "react-router-dom";
// UI
import { makeStyles, Theme } from "@material-ui/core/styles";
// Interface
import { BoardData } from "interfaces/index";
// Components
import UserCircleImage from "views/components/block/UserCircleImage";
import OtherImage from "views/components/block/OtherImage";
import UserName from "views/components/block/UserName";

interface BoardItemProps {
  boards: BoardData[];
  handleGetBoardData: Function;
}

const useStyles = makeStyles((theme: Theme) => ({
  userImage: {
    width: "25px",
    height: "25px",
    objectFit: "cover",
    borderRadius: "20px",
  },
}));

const BoardsItem = ({ boards }: BoardItemProps) => {
  const classes = useStyles();

  return (
    <>
      {boards.map((board) => (
        <Link
          to={`/board/${board.boardId}`}
          key={board.id}
          className="inline-block border-b py-2 px-3 w-full"
        >
          <div className="flex">
            <div className="w-3/5">
              <p className="text-base h-12 txt-limit-2 pr-2">{board.title}</p>
              <div className="flex my-1">
                <OtherImage
                  id={board.userId}
                  url={board.userImage}
                  imageWidth={"25px"}
                  imageHeight={"25px"}
                  borderRadius={"20px"}
                />

                <UserName
                  name={board.name}
                  fontSize={"14px"}
                  fontWeight={0}
                  margin={"auto 5px"}
                />
              </div>
            </div>

            <div className="w-2/5">
              <UserCircleImage
                generalData={board}
                imageWidth={"100%"}
                imageHeight={"80px"}
                rounded={"5px"}
                marginRight={""}
              />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BoardsItem;
