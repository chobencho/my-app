import React from 'react';
export interface ColUserTableProps {
    trTitle: string;
    trData: string;
}

const ColUserTable = ({ trTitle, trData }: ColUserTableProps) => {
    return (
        <tr>
            <td className="font-semibold pl-1 pr-3 py-4 whitespace-nowrap text-sm text-gray-800">
                {trTitle}
            </td>
            <td className="whitespace-pre-wrap py-4  text-sm text-gray-800">
                {trData}
            </td>
        </tr>
    );
};

export default ColUserTable;
