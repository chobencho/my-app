import { useNavigate } from "react-router-dom";
import { deleteBoard } from "lib/api/board";
import { deleteChatRoom } from "lib/api/chat";

export interface CommonDeleteButtonProps {
  generalId: string | undefined;
  discrimination: string;
}

const CommonDeleteButton = ({
  generalId,
  discrimination,
}: CommonDeleteButtonProps) => {
  const navigate = useNavigate();

  // 削除機能(掲示板,チャット)
  const handleDeleteData = async () => {
    if (window.confirm("削除すると元の状態に戻せませんがよろしいですか？")) {
      await deleteBoard(generalId).then(() => {
        navigate("/boards");
      });
    }
  };

  return (
    <>
      <button
        className="underline text-xs text-right w-full"
        onClick={() => handleDeleteData()}
      >
        削除する
      </button>
    </>
  );
};

export default CommonDeleteButton;
