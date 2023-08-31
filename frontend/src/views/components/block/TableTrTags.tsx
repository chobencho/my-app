<<<<<<< HEAD
import React from "react";
import { UserTagData } from "interfaces/index";

interface TagProps {
  tags: UserTagData[];
}

const TagComponent = ({ tags }: TagProps) => (
  <div className="flex flex-wrap">
    {tags.map((tag) => (
      <p
        key={tag.id}
        className="bg-blue-base rounded-3xl text-white py-1 px-3 mr-1 mb-1"
      >
        {tag.tagName}
      </p>
    ))}
  </div>
);

export interface TableTrProps {
  trTitle: string;
  trData: string | UserTagData[];
}

const TableTr = ({ trTitle, trData }: TableTrProps) => {
  const trStyle: React.CSSProperties = {
    display: "block",
    borderBottom: "1px solid #eee",
    margin: "10px 0 0",
    paddingBottom: "5px",
  };
  const tdLeftStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
    width: "80px",
  };
  const tdRightStyle: React.CSSProperties = {
    fontSize: "14px",
    whiteSpace: "pre-wrap",
  };

  return (
    <tr>
      <td className="font-semibold pl-1 pr-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {trTitle}
      </td>
      <td className="whitespace-pre-wrap py-4  text-sm text-gray-800 dark:text-gray-200">
        {Array.isArray(trData) ? (
          trData.length > 0 && "tagName" in trData[0] ? (
            <td style={tdRightStyle}>
              <TagComponent tags={trData as UserTagData[]} />
            </td>
          ) : (
            <span>設定されていません</span>
          )
        ) : (
          <span>Invalid data</span>
        )}
      </td>
    </tr>
  );
};

export default TableTr;
=======
import React from "react";
import { UserTagData } from "interfaces/index";

interface TagProps {
  tags: UserTagData[];
}

const TagComponent = ({ tags }: TagProps) => (
  <div className="flex flex-wrap">
    {tags.map((tag) => (
      <p
        key={tag.id}
        className="bg-blue-base rounded-3xl text-white py-1 px-3 mr-1 mb-1"
      >
        {tag.tagName}
      </p>
    ))}
  </div>
);

export interface TableTrProps {
  trTitle: string;
  trData: string | UserTagData[];
}

const TableTr = ({ trTitle, trData }: TableTrProps) => {
  const trStyle: React.CSSProperties = {
    display: "block",
    borderBottom: "1px solid #eee",
    margin: "10px 0 0",
    paddingBottom: "5px",
  };
  const tdLeftStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
    width: "80px",
  };
  const tdRightStyle: React.CSSProperties = {
    fontSize: "14px",
    whiteSpace: "pre-wrap",
  };

  return (
    <tr>
      <td className="font-semibold pl-1 pr-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {trTitle}
      </td>
      <td className="whitespace-pre-wrap py-4  text-sm text-gray-800 dark:text-gray-200">
        {Array.isArray(trData) ? (
          trData.length > 0 && "tagName" in trData[0] ? (
            <td style={tdRightStyle}>
              <TagComponent tags={trData as UserTagData[]} />
            </td>
          ) : (
            <span>設定されていません</span>
          )
        ) : (
          <span>Invalid data</span>
        )}
      </td>
    </tr>
  );
};

export default TableTr;
>>>>>>> bce83383af6e537856b901e80365bf1306d39657
