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
      <div className="text-center my-5">
        <button
          className={`relative border w-3/5 rounded-3xl p-3 bg-blue-base text-white`}
          onClick={() => handleModalApplyNewCommunity()}
          disabled={!verifiedAge}
        >
          <span>新規コミュニティ申請</span>
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

      {/* 新規コミュニティ申請モーダル */}
      {showModal ? (
        <ModalApplyNewCommunity onClose={handleClearPreview} />
      ) : null}
    </>
  );
};

export default CommunityCreate;
