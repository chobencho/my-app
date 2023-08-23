import React from "react";

export interface OtherImageProps {
  url: string;
  imageWidth: string;
  imageHeight: string;
  borderRadius: string;
}

const OtherImage = ({
  url,
  imageWidth,
  imageHeight,
  borderRadius,
}: OtherImageProps) => {
  const image: React.CSSProperties = {
    width: imageWidth,
    height: imageHeight,
    borderRadius: borderRadius,
    objectFit: "cover",
  };
  return <img src={url} alt="boardData image" style={image} />;
};

export default OtherImage;
