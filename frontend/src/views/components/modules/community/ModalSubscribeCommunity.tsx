// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Function
import { subscribeCommunity } from "lib/api/community";
// Components
// import GoBackButton from "components/utils/common/GoBackButton";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export interface ModalSubscribeProps {
  community_id: string | undefined;
  user_id: string | undefined;
  handleGetSubscribedCommunity: Function;
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
    width: "80%",
    maxHeight: "80%",
    background: "#fff",
    textAlign: "center",
    padding: "40px 0",
  },
}));

const ModalSubscribeCommunity = ({
  community_id,
  user_id,
  handleGetSubscribedCommunity,
}: ModalSubscribeProps) => {
  const classes = useStyles();

  // 送信用フォームデータ作成関数
  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("community_id", community_id ? community_id : "");
    formData.append("user_id", user_id ? user_id : "");

    return formData;
  };

  const handleSubscribeCommunity = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const data = createFormData();

    await subscribeCommunity(data).then(() => {
      handleGetSubscribedCommunity();
    });
  };

  return (
    <>
      <div className={`${classes.modal}`}>
        <div className={`${classes.modalContent}`}>
          <h1 className="text-sm mb-5">このコミュニティに参加しますか？</h1>
          <div className="w-4/5 flex justify-between m-auto">
            <form onSubmit={handleSubscribeCommunity} className="w-1/2">
              <button
                type="submit"
                className="bg-blue-base text-white text-sm py-1 w-4/5"
              >
                参加する
              </button>
            </form>
            {/* <GoBackButton discriminationText={"参加しない"} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSubscribeCommunity;
