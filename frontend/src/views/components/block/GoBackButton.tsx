import { useNavigate } from "react-router-dom";

export interface GoBackButtonProps {
  discriminationText: string;
}

const GoBackButton = ({ discriminationText }: GoBackButtonProps) => {
  const navigate = useNavigate();

  // 画面をひとつ戻る関数
  const handleGoBack = () => {
    navigate(-1); // 画面を一つ戻る
  };
  return (
    <div className="w-1/2">
      <button
        onClick={handleGoBack}
        className="bg-gray-300 text-gray text-sm py-1 w-4/5"
      >
        {discriminationText}
      </button>
    </div>
  );
};

export default GoBackButton;
