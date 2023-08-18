// Interface
import { CommunityData } from "interfaces/index";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Components
import CommunitiesItem from "views/components/modules/community/CommunitiesItem";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface ModalCategoryCommunityProps {
  onClose: Function;
  selectedCategoryData: CommunityData[];
  strSelectedCategory: string;
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
  modalImg: {
    display: "block",
    margin: "0 auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ModalCategoryCommunity = ({
  onClose,
  selectedCategoryData,
  strSelectedCategory,
}: ModalCategoryCommunityProps) => {
  const classes = useStyles();

  return (
    <>
      <div className={`${classes.modal}`}>
        <p className={`${classes.modalContent}`}>
          <button onClick={() => onClose()} className="">
            <HighlightOffIcon />
          </button>
          <p className="text-center text-sm pt-1 pb-3">
            {strSelectedCategory}カテゴリのコミュニティ一覧
          </p>
          <div className="overflow-scroll w-full h-80">
            {selectedCategoryData.map((categoryCommunity) => (
              <>
                <CommunitiesItem
                  community={categoryCommunity}
                  key={categoryCommunity.id}
                />
              </>
            ))}
          </div>
        </p>
      </div>
    </>
  );
};

export default ModalCategoryCommunity;
