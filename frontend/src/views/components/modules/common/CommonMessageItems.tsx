import { useState } from "react";
// Interface
import { MessageItemsData } from "interfaces/index";
// Function
import ModalCommonExpansionImage from "views/components/modules/common/ModalCommonExpansionImage";
import { clearModal } from "lib/api/helper";
import { expansionImage } from "lib/api/helper";

import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

import { makeStyles, Theme } from "@material-ui/core/styles";

export interface CommunityCommentProps {
  message: MessageItemsData;
  stringMyId: string | undefined;
}

const useStyles = makeStyles((theme: Theme) => ({
  userImage: {
    width: "30px",
    height: "30px",
    objectFit: "cover",
    borderRadius: "20px",
  },
}));

const CommonMessageItems = ({ message, stringMyId }: CommunityCommentProps) => {
  const classes = useStyles();

  // State
  const [showModal, setShowModal] = useState<boolean>(false);

  // 画像拡大機能
  const handleExpansionImage = () => {
    expansionImage(setShowModal);
  };

  // モーダルクリア機能
  const handleCloseModal = () => {
    clearModal(setShowModal);
  };

  return (
    <>
      {message.userId == stringMyId ? (
        <div className="px-2 py-3 flex w-5/6 justify-end ml-auto">
          <p className="text-10 pr-1 text-right flex items-end justify-end">
            {moment(message.createdAt).format("MM月DD日 HH:mm")}
          </p>
          <div className="w-fit">
            {message.body ? (
              <p className="whitespace-pre-wrap text-sm bg-green-400 border w-fit ml-auto rounded-b-2xl rounded-l-2xl py-1 px-3">
                <span className="break-all">{message.body}</span>
              </p>
            ) : null}
            {message.image?.url ? (
              <img
                src={message.image.url}
                alt="boardData image"
                className="rounded ml-auto w-56"
                onClick={() => handleExpansionImage()}
              />
            ) : null}
          </div>
        </div>
      ) : (
        <div className="px-2 py-3 flex w-4/5 justify-start mr-auto">
          <div className="flex">
            <img
              src={`http://localhost:3001/uploads/user/image/${message.userId}/${message.userImage}`}
              alt="boardData image"
              className={`${classes.userImage}`}
            />
            <div className="pl-2">
              <p className="text-xs pb-1">{message.name}</p>
              {message.body ? (
                <p className="whitespace-pre-wrap text-sm bg-gray-600 text-white border max-w-fit mr-auto rounded-b-2xl rounded-r-2xl py-1 px-3">
                  <span className="break-all">{message.body}</span>
                </p>
              ) : null}
              {message.image?.url ? (
                <img
                  src={message.image.url}
                  alt="boardData image"
                  className="rounded ml-auto w-56"
                  onClick={() => handleExpansionImage()}
                />
              ) : null}
            </div>
          </div>
          <p className="text-10 pl-2 text-left flex items-end justify-start">
            {moment(message.createdAt).format("MM月DD日 HH:mm")}
          </p>
        </div>
      )}

      {message.image?.url && showModal ? (
        <ModalCommonExpansionImage
          onClose={handleCloseModal}
          image={message.image.url}
        />
      ) : null}
    </>
  );
};

export default CommonMessageItems;
