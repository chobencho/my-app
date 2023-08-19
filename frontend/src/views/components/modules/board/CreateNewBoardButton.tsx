import { Link, useNavigate } from "react-router-dom";

export interface CreateNewBoardButtonProps {
  verifiedAge: boolean;
}

const CreateNewBoardButton = ({ verifiedAge }: CreateNewBoardButtonProps) => {
  const navigate = useNavigate();
  const toLink = () => {
    navigate("/boardCreate");
  };
  return (
    <>
      <div className="text-center my-5">
        <button
          className={`relative border w-3/5 rounded-3xl p-3 bg-blue-base text-white`}
          onClick={() => toLink()}
          disabled={!verifiedAge}
        >
          <span>新規作成</span>
          {verifiedAge ? null : (
            <p
              className="absolute  w-full rounded-3xl py-3 top-0 left-0 text-white"
              style={{ backgroundColor: "rgba(128, 128, 128, 0.7)" }}
            >
              年齢確認してね
            </p>
          )}
        </button>
      </div>
    </>
  );
};

export default CreateNewBoardButton;
