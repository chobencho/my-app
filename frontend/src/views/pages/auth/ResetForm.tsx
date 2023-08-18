import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  PasswordReset,
  PasswordResetType,
} from "views/components/modules/common/authAction";

type Props = {
  resetPasswordToken: string;
};

const ResetForm: FC<Props> = ({ resetPasswordToken }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<PasswordResetType>({ criteriaMode: "all" });
  const password = watch("password", "");

  const onSubmit: SubmitHandler<PasswordResetType> = (data: any) => {
    void PasswordReset.onReset(data).then(() => {
      setIsSubmitted(true);
    });
  };

  if (isSubmitted) return <p>パスワード再設定完了</p>;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password">パスワード</label>
        <input
          className="border"
          type="password"
          {...register("password", {
            // required: validation.required,
            // pattern: validation.pattern.password,
          })}
          //   errors={errors}
        />
        <label htmlFor="passwordConfirmation">パスワード確認</label>
        <input
          className="border"
          type="password"
          {...register("passwordConfirmation", {
            // required: validation.required,
            // validate: (value) => validation.validate.confirm(password, value),
          })}
          //   errors={errors}
        />
        <input
          type="hidden"
          value={resetPasswordToken}
          {...register("resetPasswordToken")}
        />
        <button type="submit" className="border bg-gray-200">
          変更
        </button>
      </form>
    </>
  );
};

export default ResetForm;
