import { useState, useCallback } from "react";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@mui/icons-material/Search";

// Components
import ModalSearchForm from "views/components/modules/home/ModalSearchForm";

interface ModalSearchFormProps {
  handleGetUsersData: Function;
  stringMyId: string;
  tags: string[];
  verifiedAge: boolean;
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
      <div className="text-black px-1" onClick={showModalWindow}>
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
