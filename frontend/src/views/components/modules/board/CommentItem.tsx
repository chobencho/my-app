// Common
import { Link } from "react-router-dom";
// Interface
import { CommentData } from "interfaces/index";
import Moment from "views/components/block/Moment";
import UserBody from "views/components/block/UserBody";
import UserName from "views/components/block/UserName";
import moment from "moment";

interface CommentItemProps {
  comment: CommentData;
}

const CommentItem = ({ comment }: CommentItemProps) => {

  return (
    <>
      <div className="border-b w-base flex m-auto py-1">
        <Link to={`/user/${comment.userId}`} className="w-16 mr-2">
          {comment.image?.url ? (
            <img
              src={comment.image.url.replace(
                "/board_comment/image/",
                `/user/image/${comment.userId}/`
              )}
              alt="comment image"
              className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full m-auto"
            />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
              alt="comment image"
              className="w-12 h-12 object-cover"
            />
          )}
        </Link>
        <div className="w-2/3">
          <p className="text-xs sm:text-base">
            {comment.name}
          </p>
          <p className="text-10 break-all sm:text-sm">
            {comment.body}
          </p>
        </div>
        <p className="text-10 w-40 text-right p-1">
          {moment(comment.createdAt).format("YYYY年MM月DD日 HH:mm")}
        </p>
      </div>
    </>
  );
};

export default CommentItem;
