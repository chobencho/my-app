import React from "react";

export interface FormInputTextProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  register: Function; // この型を正確に設定する必要があります
  errors: Record<string, any>;
  inputTitle: string;
  column: string;
}

const FormInputText = ({
  state,
  setState,
  register,
  errors,
  inputTitle,
  column,
}: FormInputTextProps) => {
  return (
    <div className="input-part">
      <div className="flex items-center">
        <b className="input-title">{inputTitle}</b>
        <p className="required">必須</p>
      </div>
      <input
        type="text"
        placeholder={inputTitle}
        className="input-text"
        value={state}
        {...register(column, { required: true })}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState(e.target.value);
        }}
      />
      {errors[column] && errors[column].type === "required" && (
        <p className="text-red-500">{inputTitle}は必須です。</p>
      )}
    </div>
  );
};

export default FormInputText;
