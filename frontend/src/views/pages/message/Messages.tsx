// Common
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
// Function
import { getChatRooms } from "lib/api/message";
import { useAuthData } from "views/components/modules/common/useAuthData";
// Interface
import { ChatUserData } from "interfaces/index";
// Components
import UserCircleImage from "views/components/block/UserCircleImage";
import PageTitle from "views/components/block/PageTitle";
import Moment from "views/components/block/Moment";
import UserName from "views/components/block/UserName";

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
      <PageTitle
        title={"チャット一覧"}
        padding={"12px 0 6px"}
        classes={"text-center border-b"}
      />
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
            <UserName
              name={chatUser.name}
              fontSize={"13px"}
              fontWeight={0}
              margin={"4px"}
            />

            <p className="text-xs txt-limit-2 px-1">
              {chatUser.latestMessageBody}
            </p>
          </div>

          <Moment
            time={chatUser.latestCreatedAt}
            format={"MM/DD HH:mm"}
            fontSize={"11px"}
            margin={""}
            classes={""}
          />
        </Link>
      ))}
    </>
  );
};

export default Messages;
