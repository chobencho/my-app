import React from "react";
import { MessageItemsData } from "interfaces/index";
import { expansionImage } from "lib/api/helper";

export interface MessageImageProps {
  generalData: MessageItemsData;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageImage = ({ generalData, setShowModal }: MessageImageProps) => {
  return (
    <>
      {generalData.image?.url ? (
        <img
          src={generalData.image?.url}
          alt="boardData image"
          className="rounded ml-auto w-56 m-1"
          onClick={() => expansionImage(setShowModal)}
        />
      ) : null}
    </>
  );
};

export default ;
