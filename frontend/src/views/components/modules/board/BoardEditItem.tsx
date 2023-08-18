// Interface
import { BoardData } from "interfaces/index";

import { makeStyles, Theme } from "@material-ui/core/styles";

import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

interface BoardEditItemProps {
  boardData: BoardData;
}

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
    borderRadius: "20px"
  }
}));

const BoardEditItem = ({
  boardData,
}: BoardEditItemProps) => {
  const classes = useStyles();

  return (
    <>
      {boardData.image?.url ? (
        <img
          src={boardData.image.url}
          alt="boardData image"
          className={`${classes.boardImage}`}
        />
      ) :
        <img src={`${process.env.PUBLIC_URL}/images/no-image.jpg`} alt="boardData image" className={`${classes.boardImage}`} />
      }
      <div className="w-96 m-auto">
        <p className="text-xl my-2">{boardData.title}</p>
        <div className="flex justify-between">
          <div className="flex my-auto">
            <img src={`http://localhost:3001/uploads/user/image/${boardData.userId}/${boardData.userImage}`} alt="boardData image" className={`${classes.userImage}`} />
            <div>
              <p className="text-xs ml-2 font-semibold">{boardData.name}</p>
              <p className="text-10 ml-2">{moment(boardData.createdAt).format("YYYY年MM月DD日 HH:mm")}</p>
            </div>
          </div>


        </div>

        <p className="whitespace-pre-wrap my-5 text-sm">{boardData.boardBody}</p>

      </div>
    </>
  );
};

export default BoardEditItem;
