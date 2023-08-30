import React from "react";
import { ChatUserData } from "interfaces/index";
import { UserData } from "interfaces/index";
import { MessageItemsData } from "interfaces/index";
import { BoardData } from "interfaces/index";

export interface UserCircleImageProps {
  generalData: ChatUserData | UserData | MessageItemsData | BoardData;
  imageWidth: string;
  imageHeight: string;
  maxImageHeight: string;
  rounded: string;
  marginRight: string;
}

const UserCircleImage = ({
  generalData,
  imageWidth,
  imageHeight,
  maxImageHeight,
  rounded,
  marginRight,
}: UserCircleImageProps) => {
  const circleImage: React.CSSProperties = {
    width: imageWidth,
    height: imageHeight,
    maxHeight: maxImageHeight,
    borderRadius: rounded,
    marginRight: marginRight,
  };

  return (
    <div className="flex items-center justify-center">
      {generalData.image?.url ? (
        <img
          src={generalData.image.url}
          alt="userData image"
          style={circleImage}
          className="object-cover"
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
          alt="image"
          style={circleImage}
          className="object-cover"
        />
      )}
    </div>
  );
};

export default UserCircleImage;
