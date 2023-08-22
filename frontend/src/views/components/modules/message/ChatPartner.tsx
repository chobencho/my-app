// Common
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
// Style
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TocIcon from "@mui/icons-material/Toc";
import ModalDeleteForm from "views/components/modules/message/ModalDeleteForm";
import UserCircleImage from "views/components/block/UserCircleImage";
// Function

// Interface

import { makeStyles, Theme } from "@material-ui/core/styles";
import { ChatUserData } from "interfaces";

interface ChatPartnerProps {
  buddy: ChatUserData;
  generalId: string;
}

const useStyles = makeStyles((theme) => ({
  mainContent: {
    position: "fixed",
    top: 48,
    left: 0,
    display: "flex",
    width: "100%",
    padding: "8px 10px 5px",
    background: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 20,
    alignItems: "center",
    justifyContent: " space-between",
  },
}));

const ChatPartner = ({ buddy, generalId }: ChatPartnerProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  // State
  const [showModal, setShowModal] = useState<boolean>(false);

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
      <div className={`${classes.mainContent}`}>
        {buddy && (
          <div className="flex">
            <span
              onClick={() => navigate("/messages")}
              className="flex items-center"
            >
              <ChevronLeftIcon />
            </span>
            <Link to={`/user/${buddy.id}`}>
              <UserCircleImage
                generalData={buddy}
                imageWidth={"36px"}
                imageHeight={"36px"}
                rounded={"999px"}
                marginRight={"5px"}
              />
            </Link>
            <p className="flex items-center">{buddy.name}</p>
          </div>
        )}
        <div>
          <TocIcon onClick={showModalWindow} />
        </div>
      </div>

      {showModal ? (
        <ModalDeleteForm onClose={handleClearModal} generalId={generalId} />
      ) : null}
    </>
  );
};

export default ChatPartner;
