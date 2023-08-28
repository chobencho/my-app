import React from "react";
import { useSearchParams } from "react-router-dom";
import ResetForm from "./ResetForm";
import SendResetMail from "./SendResetMail";

const PasswordResetForm = () => {
  const [searchParams] = useSearchParams();

  const resetPasswordToken = searchParams.get("reset_password_token");

  return (
    <div>
      <p className="text-center py-3">パスワード変更</p>
      {resetPasswordToken ? (
        <ResetForm resetPasswordToken={resetPasswordToken} />
      ) : (
        <SendResetMail />
      )}
    </div>
  );
};

export default PasswordResetForm;
