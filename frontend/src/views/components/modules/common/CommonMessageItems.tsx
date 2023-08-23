// Common
import { Link } from "react-router-dom";
import { useState } from "react";
// Interface
import { MessageItemsData } from "interfaces/index";
// Function
import ModalCommonExpansionImage from "views/components/modules/common/ModalCommonExpansionImage";
// Components
import MessageImage from "views/components/block/MessageImage";
import MessageBody from "views/components/block/MessageBody";
import Moment from "views/components/block/Moment";
import OtherImage from "views/components/block/OtherImage";

export interface CommunityCommentProps {
  message: MessageItemsData;
  stringMyId: string | undefined;
}
const CommonMessageItems = ({ message, stringMyId }: CommunityCommentProps) => {
  // State
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {message.userId == stringMyId ? (
        <div className="px-2 py-3 flex w-5/6 justify-end ml-auto">
          <Moment
            time={message.createdAt}
            format={"MM月DD日 HH:mm"}
            fontSize={"10px"}
            margin={""}
            classes={"pr-1 text-right flex items-end justify-end"}
          />
          <div className="w-fit">
            <MessageBody
              generalData={message}
              bgColor={"#43D466"}
              classes={"rounded-l-2xl ml-auto w-fit"}
            />

            <MessageImage generalData={message} setShowModal={setShowModal} />
          </div>
        </div>
      ) : (
        <div className="px-2 py-3 flex w-4/5 justify-start mr-auto">
          <div className="flex">
            <Link to={`/user/${message.userId}`} className="inline-block w-10">
              <OtherImage
                url={`http://localhost:3001/uploads/user/image/${message.userId}/${message.userImage}`}
                imageWidth={"30px"}
                imageHeight={"30px"}
                borderRadius={"20px"}
              />
            </Link>
            <div className="">
              <p className="text-xs pb-1">{message.name}</p>
              <MessageBody
                generalData={message}
                bgColor={"#666"}
                classes={"rounded-r-2xl mr-auto text-white max-w-fit "}
              />
              <MessageImage generalData={message} setShowModal={setShowModal} />
            </div>
          </div>
          <Moment
            time={message.createdAt}
            format={"MM月DD日 HH:mm"}
            fontSize={"10px"}
            margin={""}
            classes={"pl-1 text-left flex items-end justify-start"}
          />
        </div>
      )}

      {message.image?.url && showModal ? (
        <ModalCommonExpansionImage
          setShowModal={setShowModal}
          image={message.image.url}
        />
      ) : null}
    </>
  );
};

export default CommonMessageItems;
