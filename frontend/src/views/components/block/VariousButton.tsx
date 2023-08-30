import { useNavigate } from "react-router-dom";

export interface VariousButtonProps {
  buttonTitle: string;
  toLink: string;
  verifiedAge: boolean;
}

const VariousButton = ({
  buttonTitle,
  toLink,
  verifiedAge,
}: VariousButtonProps) => {
  const navigate = useNavigate();
  return (
    <div className="text-center my-5">
      <button
        className={`relative border w-1/2 rounded-3xl p-3 bg-blue-base text-white`}
        onClick={() => navigate(toLink)}
        disabled={!verifiedAge}
      >
        <span>{buttonTitle}</span>
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
  );
};

export default VariousButton;
