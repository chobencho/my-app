import React from "react";
import { useSearchParams } from "react-router-dom";
import ResetForm from "./ResetForm";
import SendResetMail from "./SendResetMail";

const PasswordResetForm = () => {
  const [searchParams] = useSearchParams();

  // クエリパラメーターからtokenを取得
  const resetPasswordToken = searchParams.get("reset_password_token");

  return (
    <div>
      <p className="text-center py-3">パスワード変更</p>
      {/* reset_password_tokenが
	      設定されている場合再設定フォームを、
	      設定されていない場合再設定メール送信フォームを表示　*/}
      {resetPasswordToken ? (
        <ResetForm resetPasswordToken={resetPasswordToken} />
      ) : (
        <SendResetMail />
      )}
    </div>
  );
};

export default PasswordResetForm;
