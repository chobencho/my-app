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

  if (isSubmitted) return <p>再設定メール送信完了</p>;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">メールアドレス</label>
        <input
          className="border"
          {...register("email", {
            // required: validation.required,
            // pattern: validation.pattern.email,
          })}
          //   errors={errors}
        />
        <button type="submit" className="border bg-gray-200">
          送信
        </button>
      </form>
    </>
  );
};

export default SendResetMail;
