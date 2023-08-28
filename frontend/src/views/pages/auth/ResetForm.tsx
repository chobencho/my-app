import React, { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Cookies from "js-cookie";
import {
  onReset,
  PasswordReset,
  PasswordResetType,
} from "views/components/modules/common/authAction";
import { ResetPasswordParams } from "interfaces/index";
import AlertMessage from "views/components/modules/common/AlertMessage";

type ResetFormProps = {
  resetPasswordToken: string;
};

const ResetForm = ({ resetPasswordToken }: ResetFormProps) => {
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [alertConfirmMessageOpen, setAlertConfirmMessageOpen] =
    useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<PasswordResetType>({ criteriaMode: "all" });
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handlePasswordReset = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const params: ResetPasswordParams = {
      password: password,
      passwordConfirmation: passwordConfirmation,
      resetPasswordToken: resetPasswordToken,
    };

    try {
      const res = await onReset(params);
      console.log(res);

      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        setAlertConfirmMessageOpen(true);
      } else {
        setAlertMessageOpen(true);
      }
    } catch (err) {
      setAlertMessageOpen(true);
    }
  };

  return (
    <>
      <form>
        <p className="w-4/5 m-auto text-justify text-sm py-5">
          新しいパスワードを入力してパスワード変更を完了してください。
        </p>
        <div className="w-4/5 m-auto pb-5">
          <label htmlFor="password"></label>
          <input
            className="input-text"
            type="password"
            value={password}
            placeholder="新しいパスワード"
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="passwordConfirmation"></label>
          <input
            className="input-text"
            type="password"
            value={passwordConfirmation}
            placeholder="新しいパスワード確認用"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
          <input
            type="hidden"
            value={resetPasswordToken}
            {...register("resetPasswordToken")}
          />
          <ul className="text-xs">
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
        </div>

        <div className="text-center py-5">
          <button
            type="submit"
            className="border w-3/5 rounded-3xl p-3 bg-blue-base text-white"
            onClick={handlePasswordReset}
          >
            パスワード変更
          </button>
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
        message="パスワードの変更が完了しました"
      />
    </>
  );
};

export default ResetForm;
