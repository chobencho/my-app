// Common
import { Link } from "react-router-dom";
// Interface
import { CommentData } from "interfaces/index";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Moment from "views/components/block/Moment";
import UserBody from "views/components/block/UserBody";
import UserName from "views/components/block/UserName";

interface CommentItemProps {
  comment: CommentData;
}

const useStyles = makeStyles((theme: Theme) => ({
  userImage: {
    width: "40px",
    height: "40px",
    objectFit: "cover",
    borderRadius: "20px",
  },
}));

const CommentItem = ({ comment }: CommentItemProps) => {
  const classes = useStyles();

  return (
    <>
      <div className="border-b w-base mx-auto py-2 flex">
        <Link to={`/user/${comment.userId}`} className="w-12">
          {comment.image?.url ? (
            <img
              src={comment.image.url.replace(
                "/board_comment/image/",
                `/user/image/${comment.userId}/`
              )}
              alt="comment image"
              className={`${classes.userImage}`}
            />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
              alt="comment image"
              className={`${classes.userImage}`}
            />
          )}
        </Link>
        <div className="mx-2 my-1 w-full">
          <div className="flex justify-between">
            <UserName
              name={comment.name}
              pcFontSize={"12px"}
              spFontSize={"12px"}
              fontWeight={0}
              margin={""}
              option={""}
            />

            <Moment
              time={comment.createdAt}
              format={"YYYY年MM月DD日 HH:mm"}
              fontSize={"10px"}
              margin={"0 0 0 8px"}
              classes={""}
            />
          </div>
          <UserBody
            body={comment.body}
            margin={"2px 0 0 0"}
            fontSize={"12px"}
            classes={"whitespace-pre-wrap"}
          />
        </div>
      </div>
    </>
  );
};

export default CommentItem;
