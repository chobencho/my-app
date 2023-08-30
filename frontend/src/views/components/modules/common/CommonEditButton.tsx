// Common
import { useNavigate } from "react-router-dom";
// Function
import { createChatRoom } from "lib/api/message";

type CommonEditButtonProps = {
  userId: string;
  myId: string;
  generalId: string;
  verifiedAge: boolean;
  commonRoomId: string;
  discrimination: string;
};

const CommonEditButton = ({
  userId,
  myId,
  generalId,
  verifiedAge,
  commonRoomId,
  discrimination,
}: CommonEditButtonProps) => {
  const navigate = useNavigate();

  // 新しいチャットルームを作成する
  const handleCreateChat = () => {
    createChatRoom(userId, myId).then(() => {
      navigate("/messages");
    });
  };

  // チャットに移動する
  const handleTransitionChat = () => {
    navigate(`/message/${commonRoomId}?buddyId=${userId}`);
  };

  // ユーザ編集画面に移動する
  const handleTransitionUserEdit = () => {
    navigate(`/${discrimination}/${generalId}/edit`);
  };

  // ボタン表示切り替え
  let toLink: () => void;
  let style = "";
  let txt = "";

  if (commonRoomId !== "") {
    toLink = handleTransitionChat;
    style = "border-blue-base bg-blue-base text-white";
    txt = "チャットする";
  } else {
    toLink = handleCreateChat;
    style = "border-blue-base bg-white text-blue-base ";
    txt = "チャットを始める";
  }
  if (userId == myId) {
    toLink = handleTransitionUserEdit;
    style = "border-gray-600 bg-gray-600 text-white";
    txt = "編集";
  }

  return (
    <>
      <div className="text-center my-5">
        <button
          className={`relative border w-1/2 rounded-3xl p-3 ${style}`}
          onClick={() => toLink()}
          disabled={!verifiedAge}
        >
          <span>{txt}</span>
          {verifiedAge ? null : (
            <p
              className="absolute  w-full rounded-3xl py-3 top-0 left-0 text-white"
              style={{ backgroundColor: "rgba(128, 128, 128, 0.7)" }}
            >
              年齢確認が未完了です
            </p>
          )}
        </button>
      </div>
    </>
  );
};

export default CommonEditButton;
