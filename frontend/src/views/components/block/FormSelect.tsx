import React from "react";
import Select from "react-select";
import Gender from "options/gender";

export interface FormSelectProps {
  value: any; // 選択された値
  onChange: (selectedOption: any) => void;
  inputTitle: string;
  options: { value: string; label: string }[];
}

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
        <p className="required">必須</p>
      </div>
      <Select value={value} onChange={onChange} options={options} />{" "}
    </div>
  );
};

export default FormSelect;
