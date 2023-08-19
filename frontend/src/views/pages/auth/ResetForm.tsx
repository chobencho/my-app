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

  if (isSubmitted)
    return (
      <>
        <div className="w-4/5  m-auto text-center py-5">
          <p>パスワード変更が完了しました。</p>
        </div>
      </>
    );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="w-4/5 m-auto text-justify text-sm py-5">
          新しいパスワードを入力してパスワード変更を完了してください。
        </p>
        <div className="w-4/5 m-auto pb-5">
          <label htmlFor="password"></label>
          <input
            className="input-text"
            type="password"
            placeholder="新しいパスワード"
            {...register("password", {
              // required: validation.required,
              // pattern: validation.pattern.password,
            })}
            //   errors={errors}
          />
          <label htmlFor="passwordConfirmation"></label>
          <input
            className="input-text"
            type="password"
            placeholder="新しいパスワード確認用"
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
        </div>
        <div className="text-center py-5">
          <button
            type="submit"
            className="border w-3/5 rounded-3xl p-3 bg-blue-base text-white"
          >
            パスワード変更
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetForm;
