import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Function
import { getMessages } from "lib/api/chat";
import { getChatPartner } from "lib/api/chat";
// Interface
import { MessageItemsData } from "interfaces/index";
import { ChatUserData } from "interfaces/index";
// Components
import CommonMessageItems from "views/components/modules/common/CommonMessageItems";
import CommonMessageForms from "views/components/modules/common/CommonMessageForms";
import ChatPartner from "views/components/modules/message/ChatPartner";
import { useAuthData } from "views/components/modules/common/useAuthData";

const Message = () => {
  // State
  const [messages, setMessages] = useState<MessageItemsData[]>([]);
  // Id
  const { stringMyId, verifiedAge, id, buddyId } = useAuthData();
  const [buddy, setBuddy] = useState<ChatUserData | null>(null);

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
        // 403エラーが発生した場合、エラーページにリダイレクト
        navigate("/error"); // リダイレクト先のURLを適切に設定
      } else {
        // 他のエラーが発生した場合、エラーメッセージを表示またはログに記録するなどの処理を追加できます
        console.error("エラーが発生しました:", error);
      }
    }
  };

  useEffect(() => {
    handleGetChatPartner();
    handleGetMessages();
  }, []);

  return (
    <>
      {/* チャット相手の情報 */}
      {buddy !== null ? (
        <>
          <ChatPartner buddy={buddy} generalId={id ?? ""} />
          <div className="py-12">
            {messages.map((message) => (
              <div key={message.id}>
                <CommonMessageItems
                  // buddy={buddy}
                  message={message}
                  stringMyId={stringMyId ?? ""}
                />
                {!verifiedAge && (
                  <span
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #000",
                    }}
                  >
                    年齢確認後に表示されます
                  </span>
                )}
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* チャットフォーム */}
      <div className="fixed bottom-14 my-1 w-full">
        <CommonMessageForms
          handleGetData={handleGetMessages}
          id={id ?? ""}
          stringMyId={stringMyId ?? ""}
          discrimination={"chat"}
        />
        {!verifiedAge && (
          <span
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            年齢確認が完了していません
          </span>
        )}
      </div>
    </>
  );
};

export default Message;
