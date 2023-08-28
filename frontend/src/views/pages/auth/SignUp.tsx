import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// Style
import TextField from "@material-ui/core/TextField";

// Function
import { signUp } from "lib/api/auth";
// Interface
import { SignUpParams } from "interfaces/index";
// Components
import AlertMessage from "views/components/modules/common/AlertMessage";

const SignUp = () => {
  // State
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [alertConfirmMessageOpen, setAlertConfirmMessageOpen] =
    useState<boolean>(false);
  // URL
  const confirmSuccessUrl = "http://localhost:3000";

  const isButtonDisabled =
    !name || !email || !password || !passwordConfirmation;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const params: SignUpParams = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
      confirmSuccessUrl: confirmSuccessUrl,
    };

    try {
      const res = await signUp(params);
      console.log(res);

      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        setAlertConfirmMessageOpen(true);
        console.log("Signed in successfully!");
      } else {
        setAlertMessageOpen(true);
      }
    } catch (err) {
      console.log(err);
      setAlertMessageOpen(true);
    }
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <div className="max-w-sm p-5">
          <p className="text-center mt-5 text-2xl">Sign Up</p>
          <div className="my-5">
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Name"
              value={name}
              margin="dense"
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Email"
              value={email}
              margin="dense"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              margin="dense"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Password Confirmation"
              type="password"
              value={passwordConfirmation}
              margin="dense"
              autoComplete="current-password"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />

            <ul className="text-xs my-2">
              <p className="m-1">パスワード設定の条件</p>
              <div className="flex flex-wrap">
                <li className="w-2/5">・大文字1文字以上</li>
                <li className="w-2/5">・小文字1文字以上</li>
                <li className="w-2/5">・数字1文字以上</li>
                <li className="w-2/5">・特殊文字1文字以上</li>
              </div>

              <li className="text-xs ml-2 mt-1">
                ( 使用可能な特殊文字 #, ?, !, @, $, %, ^, &, *, - )
              </li>
            </ul>

            <TextField type="hidden" value={confirmSuccessUrl} />

            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full p-3 rounded my-5  ${
                isButtonDisabled
                  ? "bg-gray-200 text-gray-400"
                  : "bg-blue-base text-white"
              }`}
              onClick={handleSubmit}
            >
              Submit
            </button>
            <div className="mt-5">
              <Link
                to="/signin"
                className="block text-center text-xs underline"
              >
                アカウントをお持ちの方はこちら
              </Link>
            </div>
          </div>
        </div>
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
        message="ご入力のメールアドレスに認証メールを送りました。"
      />
    </>
  );
};

export default SignUp;
