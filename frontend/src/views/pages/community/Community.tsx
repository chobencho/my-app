// Common
import { useEffect, useState } from 'react';
// Interface
import { CommunityData } from 'interfaces/index';
import { MessageItemsData } from 'interfaces/index';
// Function
import { getCommunityData } from 'lib/api/community_chats';
import { getCommunityCommentData } from 'lib/api/community_chats';
import { getSubscribedCommunity } from 'lib/api/community_chats';
// Components
import CommunityTop from 'views/components/block/community/CommunityTop';
import CommonMessageItems from 'views/components/modules/common/CommonMessageItems';
import CommonMessageForms from 'views/components/atoms/VariousMessageForm';
import ModalSubscribeCommunity from 'views/components/modules/community/ModalSubscribeCommunity';
import { useAuthData } from 'views/components/modules/common/useAuthData';

const Community = () => {
    // State
    const [community, setCommunity] = useState<CommunityData | null>(null);
    const [comments, setComments] = useState<MessageItemsData[]>([]);
    const [subscribed, setSubscribed] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    // Id
    const { stringMyId, id } = useAuthData();

    // コミュニティ情報取得
    const handleGetCommunityData = async () => {
        getCommunityData(id).then((res) => setCommunity(res.data));
    };

    // コメント情報取得
    const handleGetCommunityCommentData = async () => {
        getCommunityCommentData(id, stringMyId).then((res) => setComments(res.data));
    };

    // 本コミュニティに参加済みかどうかを判定
    const handleGetSubscribedCommunity = async () => {
        getSubscribedCommunity(stringMyId, id).then((res) => setSubscribed(res.data));
    };

    useEffect(() => {
        const fetchData = async () => {
            await handleGetCommunityData();
            await handleGetCommunityCommentData();
            await handleGetSubscribedCommunity();
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (subscribed === false) {
            setTimeout(() => {
                setIsModalOpen(true);
            }, 500);
        }
    }, [subscribed]);

    return (
        <div className="bg-blue-200 h-screen">
            {community && (
                <>
                    <CommunityTop
                        community={community}
                        community_id={id || undefined}
                        user_id={stringMyId || undefined}
                    />
                    <div className="py-16">
                        {comments.map((message) => (
                            <CommonMessageItems
                                key={message.id}
                                message={message}
                                stringMyId={stringMyId || undefined}
                            />
                        ))}
                    </div>
                    <div className="fixed bottom-14 my-1 w-full max-w-540">
                        <CommonMessageForms
                            handleGetData={handleGetCommunityCommentData}
                            id={id ?? ''}
                            stringMyId={stringMyId ?? ''}
                            another_id={'community_id'}
                            discrimination={'community'}
                        />
                    </div>
                </>
            )}

            {subscribed === false && isModalOpen && (
                <ModalSubscribeCommunity
                    community_id={id}
                    user_id={stringMyId}
                    handleGetSubscribedCommunity={handleGetSubscribedCommunity}
                    isModalOpen={isModalOpen}
                />
            )}
        </div>
    );
};
export default Community;
