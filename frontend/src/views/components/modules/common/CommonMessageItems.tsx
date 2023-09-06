// Common
import { Link } from 'react-router-dom';
import { useState } from 'react';
// Interface
import { MessageItemsData } from 'interfaces/index';
// Function
import ModalCommonExpansionImage from 'views/components/modules/common/ModalCommonExpansionImage';
// Components
import MessageImage from 'views/components/block/MessageImage';
import MessageBody from 'views/components/block/MessageBody';
import Moment from 'views/components/block/Moment';
import OtherImage from 'views/components/block/OtherImage';
import moment from 'moment';
import { expansionImage } from 'lib/api/helper';
import ShowVariousOtherImage from 'views/components/atoms/ShowVariousOtherImage';

export interface CommunityCommentProps {
    message: MessageItemsData;
    stringMyId: string | undefined;
}
const CommonMessageItems = ({ message, stringMyId }: CommunityCommentProps) => {
    // State
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            {message.userId == stringMyId ? (
                <div className="flex w-5/6 sm:w-2/3 ml-auto justify-end my-2 mx-1">
                    <p className=" text-10 w-24 pb-1 flex justify-end items-end">
                        {moment(message.createdAt).format('Mo月Do H:mm')}
                    </p>
                    <div className=" w-fit px-1">
                        {message.body ? (
                            <p className="bg-green-400 rounded-b-md rounded-l-lg py-2 px-3 text-xs w-fit ml-auto">
                                <span className="break-all whitespace-pre-wrap">
                                    {message.body}
                                </span>
                            </p>
                        ) : null}

                        {message.image?.url ? (
                            <img
                                src={message.image?.url}
                                alt="boardData image"
                                className="rounded-lg my-1"
                                onClick={() => expansionImage(setShowModal)}
                            />
                        ) : null}
                    </div>
                </div>
            ) : (
                <div className="flex w-5/6 sm:w-2/3 mr-auto justify-start my-2 mx-1">
                    <Link to={`/user/${message.userId}`} className="min-w-fit">
                        <ShowVariousOtherImage
                            generalData={message}
                            alt={'boardData image'}
                            classContent={'object-cover'}
                            imageWidth={'40px'}
                            imageHeight={'40px'}
                            maxImageHeight={''}
                            rounded={'100%'}
                            margin={''}
                        />
                    </Link>

                    <div className="w-fit px-2 pt-5">
                        {message.body ? (
                            <p className="bg-gray-700 text-white rounded-b-md rounded-r-lg py-2 px-3 text-xs w-fit">
                                <span className="break-all whitespace-pre-wrap">
                                    {message.body}
                                </span>
                            </p>
                        ) : null}

                        {message.image?.url ? (
                            <img
                                src={message.image?.url}
                                alt="boardData image"
                                className="rounded-lg my-1"
                                onClick={() => expansionImage(setShowModal)}
                            />
                        ) : null}
                    </div>
                    <p className=" text-10 w-24 pb-1 flex justify-start items-end">
                        {moment(message.createdAt).format('Mo月Do H:mm')}
                    </p>
                </div>
            )}

            {message.image?.url && showModal ? (
                <ModalCommonExpansionImage setShowModal={setShowModal} image={message.image.url} />
            ) : null}
        </>
    );
};

export default CommonMessageItems;
