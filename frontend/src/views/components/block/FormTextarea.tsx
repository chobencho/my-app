import React from "react";

export interface FormFormTextareaProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  register: Function; // この型を正確に設定する必要があります
  errors: Record<string, any>;
  inputTitle: string;
  column: string;
}

const FormTextarea = ({
  state,
  setState,
  register,
  errors,
  inputTitle,
  column,
}: FormFormTextareaProps) => {
  return (
    <div className="input-part">
      <div className="flex items-center">
        <b className="input-title">{inputTitle}</b>
        <p className="required">必須</p>
      </div>
      <textarea
        placeholder={inputTitle}
        className="input-text whitespace-pre-wrap h-40"
        value={state}
        {...register(column, { required: true })}
        onChange={(e) => {
          setState(e.target.value);
        }}
      ></textarea>
      {errors[column] && errors[column].type === "required" && (
        <p className="text-red-500">{inputTitle}は必須です。</p>
      )}
    </div>
  );
};

export default FormTextarea;
