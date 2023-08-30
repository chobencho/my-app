import React from "react";
export interface TableTrProps {
  trTitle: string;
  trData: string;
}

const TableTr = ({ trTitle, trData }: TableTrProps) => {
  return (
    <tr>
      <td className="font-semibold pl-1 pr-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {trTitle}
      </td>
      <td className="whitespace-pre-wrap py-4  text-sm text-gray-800 dark:text-gray-200">
        {trData}
      </td>
    </tr>
  );
};

export default TableTr;
