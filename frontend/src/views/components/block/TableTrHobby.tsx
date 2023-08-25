import React from "react";
import { UserTagData, UserHobbyData, UserInterestData } from "interfaces/index";
import Hobby from "options/hobby";
import Interest from "options/interest";

interface HobbyProps {
  hobbies: UserHobbyData[];
}

const HobbyComponent = ({ hobbies }: HobbyProps) => (
  <div className="flex flex-wrap">
    {hobbies.map((hobby) => {
      const hobbyOption = Hobby.HOB_OPTIONS.find(
        (option) => option[0] === parseInt(hobby.hobbyId)
      );
      if (hobbyOption) {
        const [, hobbyName, hobbyImage] = hobbyOption;
        return (
          <div key={hobby.hobbyId} className="w-1/5 p-1 relative">
            <div className="relative">
              <img
                src={`${process.env.PUBLIC_URL}/images/hobby/${hobbyImage}`}
                className="w-full h-auto rounded image-dark"
              />
              <span className="absolute bottom-4 left-0 right-0 text-white text-sm text-center py-1">
                {hobbyName}
              </span>
            </div>
          </div>
        );
      }
      return null;
    })}
  </div>
);

export interface TableTrProps {
  trTitle: string;
  trData: string | UserHobbyData[];
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
        trData.length > 0 && "hobbyId" in trData[0] ? (
          <>
            <td style={tdRightStyle}></td>
            <HobbyComponent hobbies={trData as UserHobbyData[]} />
          </>
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
