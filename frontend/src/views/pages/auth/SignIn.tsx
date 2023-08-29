import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { AuthContext } from "App";
// Style
import TextField from "@material-ui/core/TextField";
// Function
import { signIn } from "lib/api/auth";
// Interface
import { SignInParams } from "interfaces/index";
// Components
import AlertMessage from "views/components/modules/common/AlertMessage";

const SignIn = () => {
  const navigate = useNavigate();
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  // State
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isButtonDisabled = !email || !password;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const params: SignInParams = {
      email: email,
      password: password,
    };

    try {
      const res = await signIn(params);
      console.log(res);
      if (res.status === 200) {
        // ログインに成功した場合はCookieに各値を格納
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        navigate("/");
        console.log("Signed in successfully!");
      } else {
        setAlertMessageOpen(true);
      }
    } catch (err: any) {
      const errorMessages = err.response.data.errors;
      setErrorMessage(errorMessages[0]);
      setAlertMessageOpen(true);
    }
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <div className="max-w-sm p-5">
          <p className="text-center mt-5 text-2xl">Sign In</p>
          <div className="my-5">
            <TextField
              variant="outlined"
              required
              fullWidth
              label="メールアドレス"
              value={email}
              margin="dense"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="パスワード"
              type="password"
              placeholder="At least 6 characters"
              value={password}
              margin="dense"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isButtonDisabled}
              className={`w-full p-3 rounded my-5  ${
                isButtonDisabled
                  ? "bg-gray-200 text-gray-400"
                  : "bg-blue-base text-white"
              }`}
            >
              ログイン
            </button>
            <div className="mt-5">
              <Link
                to="/signup"
                className="block text-center text-xs underline mb-3"
              >
                アカウントをお持ちでない方はこちら
              </Link>
              <Link
                to="/resetpassword"
                className="block text-center text-xs underline"
              >
                パスワードを忘れた方はこちら
              </Link>
            </div>
          </div>
        </div>
      </form>
      <AlertMessage
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message={errorMessage}
      />
    </>
  );
};

export default SignIn;
