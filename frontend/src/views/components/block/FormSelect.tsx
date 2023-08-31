import React from "react";
import Select from "react-select";
import Gender from "options/gender";

export interface FormSelectProps {
  value: any;
  onChange: (selectedOption: any) => void;
  inputTitle: string;
  options: { value: string; label: string }[];
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "#fff",
    border: "none",
    height: "44px",
  }),
  indicatorSeparator: (provided: any) => ({}),
};

const FormSelect = ({
  value,
  onChange,
  inputTitle,
  options,
}: FormSelectProps) => {
  return (
    <div className="my-1">
      <div className="flex items-center">
        <b className="input-title">{inputTitle}</b>
      </div>

      <div className="relative">
        <Select
          styles={customStyles}
          value={value}
          onChange={onChange}
          options={options}
          className="py-3 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        />
      </div>
    </div>
  );
};

export default FormSelect;
