import { makeStyles, Theme } from "@material-ui/core/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { InfoData } from "interfaces/index"

export interface ModalInformationProps {
  info: InfoData | null;
  onClose: Function;
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
    zIndex: 99,
  },
  modalContent: {
    maxWidth: "80%",
    maxHeight: "60%",
    background: "#fff",
    padding: "5px",
  },
}));

const ModalInformation = ({ onClose, info }: ModalInformationProps) => {
  const classes = useStyles();

  return (
    <>
      <div className={`${classes.modal}`}>
        <p className={`${classes.modalContent}`}>
          <button onClick={() => onClose()} className="">
            <HighlightOffIcon />
          </button>
          {info && (
            <div>
              <p className="text-center">{info.title}</p>
              <p className="w-4/5 text-xs whitespace-pre-wrap m-auto my-5">{info.body}</p>
            </div>
          )}

        </p>
      </div>
    </>
  )
}

export default ModalInformation



