import { ChatUserData } from 'interfaces/index';
import { UserData } from 'interfaces/index';
import { MessageItemsData } from 'interfaces/index';
import { BoardData } from 'interfaces/index';

export interface ShowVariousOtherImageProps {
    generalData: ChatUserData | UserData | MessageItemsData | BoardData;
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
    return (
        // {generalData.userImage !== null ? (
        //     <img
        //         src={`http://localhost:3001/uploads/user/image/${generalData.userId}/${generalData.userImage}`}
        //         alt="boardData image"
        //         className="w-8 h-8 object-cover rounded-3xl mr-2"
        //     />
        // ) : (
        //     <img
        //         src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
        //         alt="boardData image"
        //     />
        // )}
        <></>
    );
};

export default ShowVariousOtherImage;
