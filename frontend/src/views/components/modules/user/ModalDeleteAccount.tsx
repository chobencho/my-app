// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useContext } from "react"
import { AuthContext } from "App"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
// Function
import { deleteAccount } from "lib/api/auth"

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
    maxHeight: "80%",
    background: "#fff",
    padding: "20px",
  },
}));

interface ModalDeleteAccountProps {
  onClose: Function;
}

const ModalDeleteAccount = ({ onClose }: ModalDeleteAccountProps) => {
  const navigate = useNavigate()
  const { setIsSignedIn } = useContext(AuthContext)
  // Style
  const classes = useStyles();

  const handleDeleteAccount = async () => {
    try {
      const res = await deleteAccount()
      console.log(res)
      if (res.status === 200) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")
        setIsSignedIn(false)
        navigate("/signin")
        console.log("Succeeded in delete account")
      } else {
        console.log("Failed in delete account")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className={`${classes.modal}`}>
        <div className={`${classes.modalContent}`}>
          <div className="my-5 text-center">
            <p className="text-xs my-5">アカウントを削除すると元に戻すことはできません。本当にアカウント削除しますか？</p>
            <div className="flex">
              <button
                onClick={() => handleDeleteAccount()}
                className="bg-red-600 text-white text-xs w-1/2 m-2 px-3 py-2"
              >
                アカウント削除
              </button>
              <button
                onClick={() => onClose()}
                className="bg-gray-600 text-white text-xs w-1/2 m-2 px-3 py-2"
              >
                キャンセル
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default ModalDeleteAccount
