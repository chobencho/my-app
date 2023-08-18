import React from "react";
import { UserTagData, UserHobbyData, UserInterestData } from "interfaces/index";
import Hobby from "options/hobby";
import Interest from "options/interest";

interface TagProps {
  tags: UserTagData[];
}

interface HobbyProps {
  hobbies: UserHobbyData[];
}

interface InterestProps {
  interests: UserInterestData[];
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

const InterestComponent = ({ interests }: InterestProps) => (
  <div className="flex flex-wrap">
    {interests.map((interest) => {
      const interestOption = Interest.INT_OPTIONS.find(
        (option) => option[0] === parseInt(interest.interestId)
      );
      if (interestOption) {
        const [, interestName, interestImage] = interestOption;
        return (
          <div key={interest.interestId} className="w-1/5 p-1 relative">
            <div className="relative">
              <img
                src={`${process.env.PUBLIC_URL}/images/interest/${interestImage}`}
                className="w-full h-auto rounded image-dark"
              />
              <span className="absolute bottom-4 left-0 right-0 text-white text-sm text-center py-1">
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
  trData: string | UserTagData[] | UserHobbyData[] | UserInterestData[];
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

      {typeof trData === "string" ? (
        <td style={tdRightStyle}>{trData}</td>
      ) : Array.isArray(trData) ? (
        // ここで trData の型に基づいてコンポーネントを選択
        trData.length > 0 && "tagName" in trData[0] ? (
          <td style={tdRightStyle}>
            <TagComponent tags={trData as UserTagData[]} />
          </td>
        ) : trData.length > 0 && "hobbyId" in trData[0] ? (
          <>
            <td style={tdRightStyle}></td>
            <HobbyComponent hobbies={trData as UserHobbyData[]} />
          </>
        ) : trData.length > 0 && "interestId" in trData[0] ? (
          <>
            <td style={tdRightStyle}></td>
            <InterestComponent interests={trData as UserInterestData[]} />
          </>
        ) : (
          <span>No matching UI component for the given data type</span>
        )
      ) : (
        <span>Invalid data</span>
      )}
    </tr>
  );
};

export default TableTr;
