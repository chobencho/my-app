import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
// Interface
import { BoardData } from "interfaces/index";

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
  boardImage: {
    width: "40%",
    height: "80px",
    objectFit: "cover",
    borderRadius: "5px",
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
              <p className="text-base h-12">{board.title}</p>
              <div className="flex my-1">
                <img
                  src={`http://localhost:3001/uploads/user/image/${board.userId}/${board.userImage}`}
                  alt="boardData image"
                  className={`${classes.userImage}`}
                />

                <p className="text-sm my-auto mx-1">{board.name}</p>
              </div>
            </div>

            {board.image?.url ? (
              <img
                src={board.image.url}
                alt="boardData image"
                className={`${classes.boardImage}`}
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/images/common/no-image.jpg`}
                alt="boardData image"
                className={`${classes.boardImage}`}
              />
            )}
          </div>
        </Link>
      ))}
    </>
  );
};

export default BoardsItem;
