import { Link } from "react-router-dom";
// Interface
import { CommentData } from "interfaces/index"
import { makeStyles, Theme } from "@material-ui/core/styles";
import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

interface CommentItemProps {
  comment: CommentData;
}

const useStyles = makeStyles((theme: Theme) => ({
  userImage: {
    width: "40px",
    height: "40px",
    objectFit: "cover",
    borderRadius: "20px"
  }
}));

const CommentItem = ({ comment }: CommentItemProps) => {
  const classes = useStyles();

  return (
    <>
      <div className="border-b w-96 mx-auto py-2">
        <Link to={`/user/${comment.userId}`} className="flex">
          {comment.image?.url ? (
            <img
              src={comment.image.url.replace('/board_comment/image/', `/user/image/${comment.userId}/`)}
              alt="comment image"
              className={`${classes.userImage}`}
            />
          ) : null}
          <div className="mx-2 my-1 w-full">
            <div className="flex justify-between">
              <h6 className="text-xs">{comment.name}</h6>
              <p className="text-10 ml-2 text-gray-600">{moment(comment.createdAt).format("YYYY年MM月DD日")}</p>
            </div>
            <p className="whitespace-pre-wrap text-xs mt-1">{comment.body}</p>
          </div>


        </Link>

      </div>

    </>
  )
}

export default CommentItem
