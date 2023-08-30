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
          className="border-b flex py-1 bg-white"
        >
          <div className="p-1 w-16 sm:w-14 ">
            {chatUser.image?.url ? (
              <img
                src={chatUser.image.url}
                alt="userData image"
                className="object-cover w-12 h-12 rounded-full"
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
                alt="image"
                className="object-cover"
              />
            )}
          </div>
          <div className="w-3/4 ">
            <UserName
              name={chatUser.name}
              pcFontSize={"12px"}
              spFontSize={"12px"}
              fontWeight={0}
              margin={"4px"}
              option={""}
            />

            <p className="text-xs txt-limit-2 px-1">
              {chatUser.latestMessageBody}
            </p>
          </div>
          <p className=" ml-auto w-20 text-10 pt-2 pr-1 flex justify-end items-start">
            {moment(chatUser.latestCreatedAt).format("Mo月Do H:mm")}
          </p>
        </Link>
      ))}
    </>
  );
};

export default Messages;
