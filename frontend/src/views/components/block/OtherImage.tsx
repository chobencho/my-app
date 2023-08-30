import React from "react";

export interface OtherImageProps {
  id: string;
  url: string;
  imageWidth: string;
  imageHeight: string;
  borderRadius: string;
}

const OtherImage = ({
  id,
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
    margin: "3px"
  };
  return (
    <>
      {url !== null ? (
        <img src={`http://localhost:3001/uploads/user/image/${id}/${url}`} alt="boardData image" style={image} />
      ) : (
        <img src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`} alt="boardData image" style={image} />

      )}
    </>
  );
};

export default OtherImage;
