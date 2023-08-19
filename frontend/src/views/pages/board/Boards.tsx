import { useEffect, useState } from "react";
// Function
import { getBoards } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
// Components
import BoardsItem from "views/components/modules/board/BoardsItem";
import CreateNewBoardButton from "views/components/modules/board/CreateNewBoardButton";
import { useAuthData } from "views/components/modules/common/useAuthData";

import Skeleton from "@material-ui/lab/Skeleton";

const Boards = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);
  const { verifiedAge } = useAuthData();
  const [isLoading, setIsLoading] = useState(true);

  const [showSkeleton, setShowSkeleton] = useState(true); // タイムアウト用

  // 掲示板を検索する関数;
  const handleGetBoardData = async () => {
    getBoards().then((res) => {
      setBoards(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    handleGetBoardData();
  }, []);

  // タイムアウト用
  useEffect(() => {
    const delay = setTimeout(() => {
      handleGetBoardData();
      setShowSkeleton(false); // データが取得されたらSkeletonを非表示に
    }, 200); // 遅延時間を調整（ここでは2000ミリ秒、つまり2秒）

    return () => clearTimeout(delay); // コンポーネントがアンマウントされたらタイマーをクリア
  }, []);

  if (isLoading || showSkeleton) {
    // ロード中はSkeletonを表示
    return (
      <div>
        <div className="p-5">
          <Skeleton
            variant="rect"
            width={120}
            height={25}
            className="m-auto rounded"
          />
        </div>
        {[1, 2, 3].map((index) => (
          <div
            className="border w-96 shadow-xs rounded mx-auto mb-3 p-2 flex items-center"
            key={index}
          >
            <div className="w-3/5 m1-2">
              <Skeleton variant="text" height={25} className="w-11/12" />
              <Skeleton variant="text" height={25} className="w-3/4" />
              <div className="flex items-center">
                <Skeleton
                  variant="circle"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <Skeleton variant="text" width={80} height={25} />
              </div>
            </div>
            <Skeleton
              variant="rect"
              width={160}
              height={90}
              className="rounded"
            />
          </div>
        ))}
        <div className="w-full fixed bottom-20">
          <Skeleton
            variant="rect"
            width={200}
            height={50}
            className="rounded-3xl mx-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-96 m-auto">
        <p className="text-center p-3">掲示板一覧</p>
        {boards && (
          <>
            <BoardsItem
              boards={boards}
              handleGetBoardData={handleGetBoardData}
            />
          </>
        )}
        <CreateNewBoardButton verifiedAge={verifiedAge} />
      </div>
    </>
  );
};

export default Boards;
