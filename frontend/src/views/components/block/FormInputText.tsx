import React from "react";

export interface FormInputTextProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  register: Function;
  errors: Record<string, any>;
  inputTitle: string;
  column: string;
  type: string;
}

const FormInputText = ({
  state,
  setState,
  inputTitle,
  type,
}: FormInputTextProps) => {
  return (
    <div>
      <div className="flex items-center">
        <b className="input-title">{inputTitle}</b>
        <p className="required">必須</p>
      </div>
      <div className="relative">
        <input
          type={type}
          placeholder={inputTitle}
          value={state}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setState(e.target.value);
          }}
          id="hs-validation-name-error"
          name="hs-validation-name-error"
          className={`py-3 pl-4 pr-14 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`}
          required
          aria-describedby="hs-validation-name-error-helper"
        />
        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none pr-3">
          {state ? (
            <svg
              className="h-5 w-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
          ) : (
            <svg
              className={`h-5 w-5 text-red-500`}
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          )}
        </div>
      </div>
    </div>

    // </>
    // <div className="input-part">
    //   <div className="flex items-center">
    //     <b className="input-title">{inputTitle}</b>
    //     <p className="required">必須</p>
    //   </div>
    //   <input
    //     type={type}
    //     placeholder={inputTitle}
    //     className="input-text"
    //     value={state}
    //     {...register(column, { required: true })}
    //     onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    //       setState(e.target.value);
    //     }}
    //   />
    //   {errors[column] && errors[column].type === "required" && (
    //     <p className="text-red-500">{inputTitle}は必須です。</p>
    //   )}
    // </div>
  );
};

export default FormInputText;
