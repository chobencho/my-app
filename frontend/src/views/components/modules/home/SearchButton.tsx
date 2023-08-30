// Common
import { useState } from "react";
// Style
import SearchIcon from "@mui/icons-material/Search";
// Components
import ModalSearchForm from "views/components/modules/home/ModalSearchForm";
// Helper
import { openModal } from "lib/api/helper";
import { clearModal } from "lib/api/helper";

interface ModalSearchFormProps {
  handleGetUsersData: Function;
  stringMyId: string;
}

const SearchButton = ({
  handleGetUsersData,
  stringMyId,
}: ModalSearchFormProps) => {
  // State
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClearModal = () => {
    clearModal(setShowModal);
  };
  const handleShowModal = () => {
    openModal(setShowModal);
  };

  return (
    <>
      <div
        className="text-black px-1 text-xl flex items-center cursor-pointer"
        onClick={handleShowModal}
      >
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
