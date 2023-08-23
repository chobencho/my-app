import React from "react";
import { UserTagData, UserHobbyData, UserInterestData } from "interfaces/index";
import Hobby from "options/hobby";
import Interest from "options/interest";

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
    <tr style={trStyle}>
      <td style={tdLeftStyle}>{trTitle}</td>

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
    </tr>
  );
};

export default TableTr;
