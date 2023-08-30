import React from "react";
import { MessageItemsData } from "interfaces/index";

export interface MessageBodyProps {
  generalData: MessageItemsData;
  bgColor: string;
  classes: string;
}

const MessageBody = ({ generalData, bgColor, classes }: MessageBodyProps) => {
  const styleMessage: React.CSSProperties = {
    backgroundColor: bgColor,
  };

  return (
    <>
      {generalData.body ? (
        <p
          className={`${classes} "whitespace-pre-wrap text-sm py-1 px-3 rounded-b-2xl border"`}
          style={styleMessage}
        >
          <span className="break-all">{generalData.body}</span>
        </p>
      ) : null}
    </>
  );
};

export default MessageBody;

// whitespace-pre-wrap text-sm py-1 px-3 rounded-b-2xl border

// rounded-l-2xl ml-auto w-fit

// rounded-r-2xl mr-auto text-white max-w-fit
