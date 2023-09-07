// Common
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Function
import { getChatRooms } from 'lib/api/message';
import { useAuthData } from 'views/components/modules/common/useAuthData';
// Interface
import { ChatUserData } from 'interfaces/index';
// Components
import ShowVariousText from 'views/components/atoms/ShowVariousText';
import ShowVariousImage from 'views/components/atoms/ShowVariousImage';
import ShowMoment from 'views/components/atoms/ShowMoment';

const Messages = () => {
    // State
    const [chatUsers, setChatUsers] = useState<ChatUserData[]>([]);
    //Id
    const { stringMyId } = useAuthData();

    // 自分の入っているチャットルームを取得
    const handleGetChatRooms = async () => {
        getChatRooms(stringMyId).then((res) => setChatUsers(res.data));
    };

    useEffect(() => {
        handleGetChatRooms();
    }, []);

    return (
        <>
            <ShowVariousText
                fontSize={'16px'}
                fontWeight={0}
                margin={''}
                classContent={'text-center border-b py-2'}
                textContent={'チャット一覧'}
                optionContent={''}
            />

            {chatUsers?.map((chatUser) => (
                <div className="">
                    <Link
                        to={`/message/${chatUser.roomId}?buddyId=${chatUser.id}`}
                        key={chatUser.id}
                        className="border-b flex py-1 bg-white"
                    >
                        <div className="p-1 min-w-fit sm:w-14 ">
                            <ShowVariousImage
                                generalData={chatUser}
                                alt={'user image'}
                                classContent={'object-cover border'}
                                imageWidth={'48px'}
                                imageHeight={'48px'}
                                maxImageHeight={''}
                                rounded={'100%'}
                                margin={''}
                            />
                        </div>
                        <div className="w-3/4 ">
                            <ShowVariousText
                                fontSize={'12px'}
                                fontWeight={0}
                                margin={'4px'}
                                classContent={''}
                                textContent={chatUser.name}
                                optionContent={''}
                            />
                            <ShowVariousText
                                fontSize={'12px'}
                                fontWeight={0}
                                margin={'4px'}
                                classContent={'txt-limit-1 w-60 sm:w-96'}
                                textContent={chatUser.latestMessageBody}
                                optionContent={''}
                            />
                        </div>

                        <ShowMoment
                            fontSize={'10px'}
                            margin={'0 0 0 auto'}
                            classContent={'pt-2 pr-1 w-24 flex justify-end items-start'}
                            time={chatUser.latestCreatedAt}
                            format={'Mo月Do H:mm'}
                        />
                    </Link>
                </div>
            ))}
        </>
    );
};

export default Messages;
