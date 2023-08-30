import { useNavigate } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { deleteChatRoom } from "lib/api/chat";

interface ModalDeleteFormProps {
  onClose: Function;
  generalId: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    // position: "fixed",
    // top: "0",
    // left: "0",
    // width: "100%",
    // height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // zIndex: 100,
  },
}));

const ModalDeleteForm = ({ onClose, generalId }: ModalDeleteFormProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  // 削除機能(掲示板,チャット)
  const handleDeleteChat = async () => {
    await deleteChatRoom(generalId).then(() => {
      navigate("/messages");
    });
  };

  return (
    <>
      <div className="w-full h-full bg-gray-600 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center z-50">
        <div className="max-modal bg-white p-2">
          <button onClick={() => onClose()} className="">
            <HighlightOffIcon />
          </button>
          <p className="m-4 text-sm text-center">
            削除すると元に戻すことはできません。このチャットルームを削除しますか？
          </p>
          <div className="text-center mb-5">
            <button
              onClick={handleDeleteChat}
              className="w-3/5 text-white bg-red-600 py-2 my-2 "
            >
              削除する
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDeleteForm;
