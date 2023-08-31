<<<<<<< HEAD
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
=======
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
>>>>>>> bce83383af6e537856b901e80365bf1306d39657
