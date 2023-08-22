// Common
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Function
import { getChatRooms } from "lib/api/message";
import { useAuthData } from "views/components/modules/common/useAuthData";
// Interface
import { ChatUserData } from "interfaces/index";
import moment from "moment";
import "moment/locale/ja";

import UserCircleImage from "views/components/block/UserCircleImage";

const Messages = () => {
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
          <UserCircleImage
            generalData={chatUser}
            imageWidth={"48px"}
            imageHeight={"48px"}
            rounded={"999px"}
            marginRight={"5px"}
          />

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
