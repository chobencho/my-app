import { useNavigate } from 'react-router-dom';
import { makeStyles, Theme } from "@material-ui/core/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { deleteChatRoom } from "lib/api/chat"

interface ModalDeleteFormProps {
  onClose: Function;
  generalId: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  modalContent: {
    maxWidth: "80%",
    maxHeight: "80%",
    background: "#fff",
    padding: "5px",
  },
}));

const ModalDeleteForm = ({ onClose, generalId }: ModalDeleteFormProps) => {
  const classes = useStyles();
  const navigate = useNavigate()

  // 削除機能(掲示板,チャット)
  const handleDeleteChat = async () => {
    await deleteChatRoom(generalId).then(() => {
      navigate("/messages")
    })
  }

  return (
    <>
      <div className={`${classes.modal}`}>
        <div className={`${classes.modalContent}`}>
          <button onClick={() => onClose()} className="">
            <HighlightOffIcon />
          </button>
          <p className="m-4 text-sm text-center">削除すると元に戻すことはできません。このチャットルームを削除しますか？</p>
          <div className="text-center mb-5">
            <button onClick={handleDeleteChat} className="w-3/5 text-white bg-red-600 py-2 my-2 ">
              削除する
            </button>
          </div>

        </div>
      </div >
    </>
  )
}

export default ModalDeleteForm
