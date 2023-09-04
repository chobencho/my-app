import { ChatUserData } from 'interfaces/index';
import { UserData } from 'interfaces/index';
import { MessageItemsData } from 'interfaces/index';
import { BoardData } from 'interfaces/index';

export interface ShowVariousImageProps {
    generalData: ChatUserData | UserData | MessageItemsData | BoardData;
    alt: string;
    classContent: string;
    imageWidth: string;
    imageHeight: string;
    maxImageHeight: string;
    rounded: string;
    margin: string;
}

const ShowVariousImage = ({
    generalData,
    alt,
    classContent,
    imageWidth,
    imageHeight,
    maxImageHeight,
    rounded,
    margin,
}: ShowVariousImageProps) => {
    const image: React.CSSProperties = {
        width: imageWidth,
        height: imageHeight,
        maxHeight: maxImageHeight,
        borderRadius: rounded,
        margin: margin,
    };
    return (
        <>
            {generalData.image?.url ? (
                <img src={generalData.image.url} alt={alt} style={image} className={classContent} />
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

export default ShowVariousImage;
