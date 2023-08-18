import client from "lib/api/client";

// パスワード再設定関連の型
export type SendResetMailType = {
  email: string;
};
export type PasswordResetType = {
  resetPasswordToken: string;
  password: string;
  passwordConfirmation: string;
};

export const sendEmail = ({ email }: SendResetMailType) => {
  return client.post(
    "auth/password",
    {
      email: email, // 正しい形式でemailデータをリクエストボディに含める
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const onReset = async ({
  resetPasswordToken,
  password,
  passwordConfirmation,
}: PasswordResetType) => {
  return client.put(
    "auth/password",
    {
      reset_password_token: resetPasswordToken,
      password,
      password_confirmation: passwordConfirmation,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

// export
export const PasswordReset = {
  sendEmail,
  onReset,
};
