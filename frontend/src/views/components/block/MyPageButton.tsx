import { Link } from "react-router-dom";

export interface MyPageButtonProps {
  toLink: string;
  buttonTitle: string;
}

const MyPageButton = ({ toLink, buttonTitle }: MyPageButtonProps) => {
  return (
    <Link to={toLink} className="inline-block w-1/2 text-sm text-center">
      <button className="w-90 bg-gray-600 text-white p-3 rounded-full">
        {buttonTitle}
      </button>
    </Link>
  );
};

export default MyPageButton;
