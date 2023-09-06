interface FormSubmitButtonProps {
  buttonTitle: string;
}

const FormSubmitButton = ({ buttonTitle }: FormSubmitButtonProps) => {
  return (
    <div className="w-full text-center my-10">
      <button
        type="submit"
        className="w-1/2 p-3 rounded-3xl bg-blue-base text-white"
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default FormSubmitButton;
