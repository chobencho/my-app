import { UserData } from "interfaces/index";

export interface UserImageProps {
  generalData: UserData;
}

const UserImage = ({ generalData }: UserImageProps) => {
  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  };

  return (
    <>
      {generalData.image?.url ? (
        <img
          src={generalData.image.url}
          alt="userData image"
          style={imageStyle}
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/images/no-image.jpg`}
          alt="boardData image"
          style={imageStyle}
        />
      )}
    </>
  );
};

export default UserImage;
