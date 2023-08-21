import React from "react";

interface FormSubmitButtonProps {
  buttonTitle: string;
}

const FormSubmitButton = ({ buttonTitle }: FormSubmitButtonProps) => {
  return (
    <div className="w-full text-center">
      <button
        type="submit"
        className="w-3/5 p-3 rounded-3xl bg-blue-base text-white"
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default FormSubmitButton;
