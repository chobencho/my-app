import React from "react";
import { UserTagData, UserHobbyData, UserInterestData } from "interfaces/index";
import Hobby from "options/hobby";
import Interest from "options/interest";

interface InterestProps {
  interests: UserInterestData[];
}

const InterestComponent = ({ interests }: InterestProps) => (
  <div className="flex flex-wrap">
    {interests.map((interest) => {
      const interestOption = Interest.INT_OPTIONS.find(
        (option) => option[0] === parseInt(interest.interestId)
      );
      if (interestOption) {
        const [, interestName, interestImage] = interestOption;
        return (
          <div key={interest.interestId} className="w-1/3 p-1 relative">
            <div className="relative">
              <img
                src={`${process.env.PUBLIC_URL}/images/interest/${interestImage}`}
                className="w-full h-20 object-cover rounded image-dark"
              />
              <span className="absolute h-20 w-full bottom-0 left-0 right-0 text-white text-sm text-center py-1 px-1 flex items-center justify-center">
                {interestName}
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
  trData: string | UserInterestData[];
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
        trData.length > 0 && "interestId" in trData[0] ? (
          <>
            <td style={tdRightStyle}></td>
            <InterestComponent interests={trData as UserInterestData[]} />
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
