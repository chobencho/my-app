// Style
import { makeStyles, Theme } from "@material-ui/core/styles";

interface ModalCommonExpansionImageProps {
  onClose: Function;
  image: string;
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
  },
  modalImg: {
    display: "block",
    margin: "0 auto",
    maxWidth: "80%",
    maxHeight: "80%",
  },
}));

const ModalCommonExpansionImage = ({
  onClose,
  image,
}: ModalCommonExpansionImageProps) => {
  const classes = useStyles();

  // モーダルをクリックしても何もしない関数
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={classes.modal} onClick={() => onClose()}>
        <img
          src={image}
          alt="modal image"
          className={`${classes.modalImg}`}
          onClick={handleBackdropClick}
        />
      </div>
    </>
  );
};

export default ModalCommonExpansionImage;
