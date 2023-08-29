import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "App";
import Cookies from "js-cookie";
import { signOut } from "lib/api/auth";
import { SendResetMailParams } from "interfaces/index";
import { sendEmail } from "views/components/modules/common/authAction";
import AlertMessage from "views/components/modules/common/AlertMessage";
import { useAuthData } from "views/components/modules/common/useAuthData";

const SendResetMail = () => {
  const [email, setEmail] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [alertConfirmMessageOpen, setAlertConfirmMessageOpen] =
    useState<boolean>(false);
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const { stringMyId } = useAuthData();

  const handleSendResetMail = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const params: SendResetMailParams = {
      email: email,
    };

    try {
      const res = await sendEmail(params);
      console.log(res);

      if (res.status === 200) {
        setAlertConfirmMessageOpen(true);
      } else {
        setAlertMessageOpen(true);
      }
      if (isSignedIn) {
        handleSignOut();
      } else {
      }
    } catch (err) {
      setAlertMessageOpen(true);
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await signOut();
      console.log(res);

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);

        console.log("Succeeded in sign out");
      } else {
        console.log("Failed in sign out");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const AuthButtons = () => {
    if (!loading) {
      if (isSignedIn) {
        return (
          <>
            <Link
              to={`/myPage/${stringMyId}`}
              color="inherit"
              className="block text-xs underline text-center"
            >
              マイページに戻る
            </Link>
          </>
        );
      } else {
        return (
          <>
            <Link
              to="/signin"
              color="inherit"
              className="block text-xs underline text-center"
            >
              アカウントをお持ちの方はこちら
            </Link>
          </>
        );
      }
    } else {
      return <></>;
    }
  };

  return (
    <>
      <form>
        <p className="w-4/5 m-auto text-justify text-sm py-5">
          ご登録中のメールアドレスを入力して送信してください。
          パスワード変更用のURLをご入力のメールアドレスに送信します。
        </p>
        <div className="w-4/5 m-auto pb-5">
          <label htmlFor="email"></label>
          <input
            className="input-text"
            placeholder="メールアドレス"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="text-center py-5">
          <button
            type="submit"
            className="border w-3/5 rounded-3xl p-3 bg-blue-base text-white"
            onClick={handleSendResetMail}
          >
            送信
          </button>
        </div>
        <AuthButtons />
      </form>
      <AlertMessage
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="入力内容が不適切です。"
      />
      <AlertMessage
        open={alertConfirmMessageOpen}
        setOpen={setAlertConfirmMessageOpen}
        severity="success"
        message="ご入力のメールアドレスにパスワード変更用URLを送りました。"
      />
    </>
  );
};

export default SendResetMail;
