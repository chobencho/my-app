// Common
import { useState, useCallback } from "react";
// Style
import SearchIcon from "@mui/icons-material/Search";
// Components
import ModalSearchForm from "views/components/modules/home/ModalSearchForm";

interface ModalSearchFormProps {
  handleGetUsersData: Function;
  stringMyId: string;
}

const SearchButton = ({
  handleGetUsersData,
  stringMyId,
}: ModalSearchFormProps) => {
  // State
  const [showModal, setShowModal] = useState(false);

  // モーダル非表示
  const handleClearModal = () => {
    setShowModal(false); // モーダルを非表示にする
  };

  // モーダル表示
  const showModalWindow = useCallback(() => {
    setShowModal(true); // 画像が選択されたときにモーダルを表示
  }, []);

  return (
    <>
      <div className="text-black px-1 text-xl flex items-center" onClick={showModalWindow}>
        <SearchIcon fontSize="medium" />
        <span className="text-base">キーワード検索</span>
      </div>
      {/* 検索モーダル */}
      {showModal ? (
        <ModalSearchForm
          onClose={handleClearModal}
          handleGetUsersData={handleGetUsersData}
          stringMyId={stringMyId ?? ""}
        />
      ) : null}
    </>
  );
};

export default SearchButton;
