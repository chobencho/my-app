// Common
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Function
import { getMessages } from 'lib/api/chat';
import { getChatPartner } from 'lib/api/chat';
// Interface
import { MessageItemsData } from 'interfaces/index';
import { ChatUserData } from 'interfaces/index';
// Components
import CommonMessageItems from 'views/components/modules/common/CommonMessageItems';
import CommonMessageForms from 'views/components/atoms/VariousMessageForm';
import ChatPartner from 'views/components/modules/message/ChatPartner';
import { useAuthData } from 'views/components/modules/common/useAuthData';

const Message = () => {
    // State
    const [messages, setMessages] = useState<MessageItemsData[]>([]);
    const [buddy, setBuddy] = useState<ChatUserData | null>(null);
    // Id
    const { stringMyId, verifiedAge, id, buddyId } = useAuthData();
    const navigate = useNavigate();

    // ルームIDからメッセージ情報を取得・更新する関数
    const handleGetMessages = async () => {
        getMessages(id, buddyId).then((res) => setMessages(res.data));
    };

    // ルームIDからメッセージ情報を取得・更新
    const handleGetChatPartner = async () => {
        try {
            const response = await getChatPartner(id, stringMyId, buddyId);
            setBuddy(response.data);
        } catch (error: any) {
            if (error.response && error.response.status === 403) {
                navigate('/error');
            } else {
                console.error('エラーが発生しました:', error);
            }
        }
    };

    useEffect(() => {
        handleGetChatPartner();
        handleGetMessages();
    }, []);

    return (
        <div className="bg-blue-200 min-h-screen">
            {buddy !== null ? (
                <div className="w-full">
                    <ChatPartner buddy={buddy} generalId={id ?? ''} />
                    <div className="py-16">
                        {messages.map((message) => (
                            <div key={message.id}>
                                <CommonMessageItems
                                    message={message}
                                    stringMyId={stringMyId ?? ''}
                                />
                            </div>
                        ))}
                        {!verifiedAge && (
                            <span
                                className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
                                style={{
                                    backgroundColor: '#fcfcfc',
                                    border: '1px solid #000',
                                }}
                            >
                                年齢確認後に表示されます
                            </span>
                        )}
                    </div>
                </div>
            ) : null}

            {/* チャットフォーム */}
            <div className="fixed bottom-14 my-1 w-full max-w-540">
                <CommonMessageForms
                    handleGetData={handleGetMessages}
                    id={id ?? ''}
                    stringMyId={stringMyId ?? ''}
                    another_id={'room_id'}
                    discrimination={'chat'}
                />
            </div>
        </div>
    );
};

export default Message;
