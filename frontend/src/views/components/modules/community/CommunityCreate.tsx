import { useState, useContext } from "react";
import { AuthContext } from "App";
// Components
import ModalApplyNewCommunity from "views/components/modules/community/ModalApplyNewCommunity";

const CommunityCreate = () => {
  // モーダルを制御するstate
  const [showModal, setShowModal] = useState(false);
  const { verifiedAge } = useContext(AuthContext);

  // モーダル表示
  const handleModalApplyNewCommunity = () => {
    setShowModal(true);
  };

  // プレビュークリア機能
  const handleClearPreview = () => {
    setShowModal(false); // モーダルを非表示にする
  };
  return (
    <>
      <div
        className={"generalButton w-3/5 relative border-blue-base bg-blue-base"}
      >
        <button
          className="text-white w-full"
          onClick={() => handleModalApplyNewCommunity()}
        >
          新規コミュニティ申請
        </button>
        {!verifiedAge && (
          <span
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            年齢確認が完了していません
          </span>
        )}
      </div>

      {/* 新規コミュニティ申請モーダル */}
      {showModal ? (
        <ModalApplyNewCommunity onClose={handleClearPreview} />
      ) : null}
    </>
  );
};

export default CommunityCreate;
