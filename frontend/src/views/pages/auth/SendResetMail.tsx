import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  PasswordReset,
  SendResetMailType,
} from "views/components/modules/common/authAction";

const SendResetMail = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SendResetMailType>({ criteriaMode: "all" });

  const onSubmit: SubmitHandler<SendResetMailType> = (data: any) => {
    void PasswordReset.sendEmail(data);
    setIsSubmitted(true);
  };

  if (isSubmitted)
    return (
      <>
        <div className="w-4/5 text-justify m-auto py-5">
          <p>
            再設定メールをメールアドレスに送信しました。ご確認お願いいたします。
          </p>
        </div>
      </>
    );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="w-4/5 m-auto text-justify text-sm py-5">
          ご登録中のメールアドレスを入力して送信してください。
          パスワード変更用のURLをご入力のメールアドレスに送信します。
        </p>
        <div className="w-4/5 m-auto pb-5">
          <label htmlFor="email"></label>
          <input
            className="input-text"
            placeholder="メールアドレス"
            {...register("email", {
              // required: validation.required,
              // pattern: validation.pattern.email,
            })}
            //   errors={errors}
          />
        </div>
        <div className="text-center py-5">
          <button
            type="submit"
            className="border w-3/5 rounded-3xl p-3 bg-blue-base text-white"
          >
            送信
          </button>
        </div>
      </form>
    </>
  );
};

export default SendResetMail;
