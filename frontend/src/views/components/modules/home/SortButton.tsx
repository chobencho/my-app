// Common
import { useState } from "react";
import Select from "react-select";

export interface SortProps {
  handleSort: Function;
}

const SortButton = ({ handleSort }: SortProps) => {
  // SortValue
  const initialSortValue = {
    value: "sortLogin",
    label: "ログイン順",
  };
  const [sortValue, setSortValue] = useState(initialSortValue);

  // セレクト値セット
  const handleChangeSort = (selectedOption: any) => {
    handleSort(selectedOption.value);
    setSortValue(selectedOption);
  };

  // セレクトオプション設定
  const options = [
    { value: "sortLogin", label: "ログイン順" },
    { value: "sortLike", label: "いいね順" },
    { value: "sortCreated", label: "登録順" },
  ];

  return (
    <>
      <div className="my-1 text-xs px-1 flex items-center">
        <Select
          value={sortValue}
          onChange={handleChangeSort}
          options={options}
        />
      </div>
    </>
  );
};

export default SortButton;
