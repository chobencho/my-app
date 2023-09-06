import { BoardData } from 'interfaces/index';
import { MessageItemsData } from 'interfaces/index';

export interface ShowVariousOtherImageProps {
    generalData: BoardData | MessageItemsData;
    alt: string;
    classContent: string;
    imageWidth: string;
    imageHeight: string;
    maxImageHeight: string;
    rounded: string;
    margin: string;
}
const ShowVariousOtherImage = ({
    generalData,
    alt,
    classContent,
    imageWidth,
    imageHeight,
    maxImageHeight,
    rounded,
    margin,
}: ShowVariousOtherImageProps) => {
    const image: React.CSSProperties = {
        width: imageWidth,
        height: imageHeight,
        maxHeight: maxImageHeight,
        borderRadius: rounded,
        margin: margin,
    };
    return (
        <>
            {generalData.userImage !== null ? (
                <img
                    src={`http://localhost:3001/uploads/user/image/${generalData.userId}/${generalData.userImage}`}
                    alt={alt}
                    style={image}
                    className={classContent}
                />
            ) : (
                <img
                    src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
                    alt={alt}
                    style={image}
                    className={classContent}
                />
            )}
        </>
    );
};

export default ShowVariousOtherImage;
