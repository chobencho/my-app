// Style

import { useContext } from "react";
import { AuthContext } from "App";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// Function
import { deleteAccount } from "lib/api/auth";

interface ModalDeleteAccountProps {
  onClose: Function;
}

const ModalDeleteAccount = ({ onClose }: ModalDeleteAccountProps) => {
  const navigate = useNavigate();
  const { setIsSignedIn } = useContext(AuthContext);

  const handleDeleteAccount = async () => {
    try {
      const res = await deleteAccount();
      console.log(res);
      if (res.status === 200) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");
        setIsSignedIn(false);
        navigate("/signin");
        console.log("Succeeded in delete account");
      } else {
        console.log("Failed in delete account");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-full bg-gray-600 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center z-50">
        <div className="max-modal bg-white p-2">
          <div className="my-5 text-center">
            <p className="text-xs m-8">
              アカウントを削除すると元に戻すことはできません。本当にアカウント削除しますか？
            </p>
            <div className="flex">
              <button
                onClick={() => handleDeleteAccount()}
                className="bg-red-600 text-white text-xs w-2/5 ml-auto mr-1 px-3 py-2"
              >
                アカウント削除
              </button>
              <button
                onClick={() => onClose()}
                className="bg-gray-600 text-white text-xs w-2/5 mr-auto ml-1 px-3 py-2"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDeleteAccount;
