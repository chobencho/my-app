import { useEffect, useState } from "react";
// Interface
import { CommunityData } from "interfaces/index";
import { MessageItemsData } from "interfaces/index";
// Function
import { getCommunityData } from "lib/api/community_chats";
import { getCommunityCommentData } from "lib/api/community_chats";
import { getSubscribedCommunity } from "lib/api/community_chats";
// Components
import CommunityTop from "views/components/modules/community/CommunityTop";
import CommonMessageItems from "views/components/modules/common/CommonMessageItems";
import CommonMessageForms from "views/components/modules/common/CommonMessageForms";
import ModalSubscribeCommunity from "views/components/modules/community/ModalSubscribeCommunity";
import { useAuthData } from "views/components/modules/common/useAuthData";
import Fade from "@mui/material/Fade";

const Community = () => {
  const [community, setCommunity] = useState<CommunityData | null>(null);
  const [comments, setComments] = useState<MessageItemsData[]>([]);
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const { stringMyId, id } = useAuthData();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // コミュニティ情報取得
  const handleGetCommunityData = async () => {
    getCommunityData(id).then((res) => setCommunity(res.data));
  };

  // コメント情報取得
  const handleGetCommunityCommentData = async () => {
    getCommunityCommentData(id, stringMyId).then((res) =>
      setComments(res.data)
    );
  };

  // 本コミュニティに参加済みかどうかを判定
  const handleGetSubscribedCommunity = async () => {
    getSubscribedCommunity(stringMyId, id).then((res) =>
      setSubscribed(res.data)
    );
  };

  useEffect(() => {
    // データ取得関数を非同期で呼び出す
    const fetchData = async () => {
      await handleGetCommunityData();
      await handleGetCommunityCommentData();
      await handleGetSubscribedCommunity();
    };

    fetchData();
  }, []);

  // データ取得が完了したらモーダルを表示する
  useEffect(() => {
    if (subscribed === false) {
      // subscribed ステートが false の場合にモーダルを表示
      setTimeout(() => {
        setIsModalOpen(true);
      }, 500); // 3秒遅延
    }
  }, [subscribed]);

  return (
    <>
      {community && (
        <>
          <CommunityTop
            community={community}
            community_id={id || undefined}
            user_id={stringMyId || undefined}
          />
          <div className="py-12">
            {comments.map((message) => (
              <CommonMessageItems
                key={message.id}
                message={message}
                stringMyId={stringMyId || undefined}
              />
            ))}
          </div>
          <div className="fixed bottom-14 my-1 w-full">
            <CommonMessageForms
              handleGetData={handleGetCommunityCommentData}
              id={id ?? ""}
              stringMyId={stringMyId ?? ""}
              discrimination={"community"}
            />
          </div>
        </>
      )}

      {/* コミュニティ登録画面 */}
      {subscribed === false && isModalOpen && (
        <ModalSubscribeCommunity
          community_id={id}
          user_id={stringMyId}
          handleGetSubscribedCommunity={handleGetSubscribedCommunity}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
};
export default Community;
