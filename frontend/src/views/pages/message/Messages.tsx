import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Function
import { getChatRooms } from "lib/api/message";
import { useAuthData } from "views/components/modules/common/useAuthData";
// Interface
import { ChatUserData } from "interfaces/index";
import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  userImage: {
    width: "48px",
    height: "48px",
    objectFit: "cover",
    borderRadius: "30px",
  },
}));

const Messages = () => {
  const classes = useStyles();
  // State
  const [chatUsers, setChatUsers] = useState<ChatUserData[]>([]);
  //Id
  const { stringMyId } = useAuthData();

  // 自分の入っているチャットルームを取得
  const handleGetChatRooms = async () => {
    getChatRooms(stringMyId).then((res) => setChatUsers(res.data));
  };

  useEffect(() => {
    handleGetChatRooms();
  }, []);

  return (
    <>
      <p className="text-center text-sm pt-4 pb-2 border-b">チャット一覧</p>
      {chatUsers?.map((chatUser) => (
        <Link
          to={`/message/${chatUser.roomId}?buddyId=${chatUser.id}`}
          key={chatUser.id}
          className="border-b flex py-1 pl-1 pr-2"
        >
          <div className="mr-1 flex items-center">
            {chatUser.image?.url ? (
              <img
                src={chatUser.image.url}
                alt="userData image"
                className={`${classes.userImage}`}
              />
            ) : null}
          </div>

          <div className="w-2/3">
            <p className="text-sm px-1">{chatUser.name}</p>
            <p className="text-xs txt-limit-2 px-1">
              {chatUser.latestMessageBody}
            </p>
          </div>
          <p className="text-xs text-gray-600 relative top-0 right-0">
            {chatUser.latestCreatedAt &&
              moment(chatUser.latestCreatedAt).format("MM/DD HH:mm")}
          </p>
        </Link>
      ))}
    </>
  );
};

export default Messages;
