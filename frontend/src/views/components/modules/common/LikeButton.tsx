import { useState, useEffect } from "react";
import { UserData } from "interfaces/index";
import { BoardData } from "interfaces/index";
// Style
import { FaHeart } from 'react-icons/fa';
// Function
import { getLike } from "lib/api/userLike";
import { createLike } from "lib/api/userLike";
import { deleteLike } from "lib/api/userLike";

interface LikeProps {
  myId: string | undefined;
  generalId: string | undefined;
  generalData: UserData | BoardData;
  handleData: Function;
}

const LikeButton = ({
  myId,
  generalId,
  generalData,
  handleData,
}: LikeProps) => {
  // State
  const [like, setLike] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // いいねする関数
  const handleCreateLike = async () => {
    createLike(myId, generalId).then(() => {
      setLike(true);
      handleData();
    });

    // アニメーションをトリガー
    setIsAnimating(true);

    // 一定時間後にアニメーションを停止
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // いいねを外す関数
  const handleDeleteLike = async () => {
    deleteLike(myId, generalId).then(() => {
      setLike(false);
      handleData();
    });
  };

  // いいねの状態を取得する関数
  const handleGetLike = async () => {
    getLike(myId, generalId).then((res) => setLike(res.data));
  };

  useEffect(() => {
    handleGetLike();
  }, []);

  return (
    <div className="absolute right-2">
      <button
        onClick={like ? handleDeleteLike : handleCreateLike}
        className="flex items-center"
      >
        <FaHeart
          className={`text-base my-1 mx-2 ${like ? "text-red-400" : ""} ${isAnimating ? "animate-like-bounce" : ""
            }`}
        />
        <span className="text-gray-500">{generalData.likeCount}</span>
      </button>
    </div>
  );
};

export default LikeButton;

