// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
// Components
import LikeButton from "views/components/modules/common/LikeButton";
import TableTr from "views/components/block/TableTr";
import TableTrTags from "views/components/block/TableTrTags";
import TableTrHobby from "views/components/block/TableTrHobby";
import TableTrInterest from "views/components/block/TableTrInterest";
import JudgeLogin from "views/components/block/JudgeLogin";
import UserCircleImage from "views/components/block/UserCircleImage";
import UserName from "views/components/block/UserName";

export interface UserItemProps {
  myId: string | undefined;
  userId: string | undefined;
  handleGetUserData: Function;
  userData: UserData;
  hobbyData: UserHobbyData[];
  interestData: UserInterestData[];
  tagsData: UserTagData[];
}

const UserItem = ({
  myId,
  userId,
  handleGetUserData,
  userData,
  hobbyData,
  interestData,
  tagsData,
}: UserItemProps) => {
  return (
    <>
      <JudgeLogin
        generalData={userData}
        position={"absolute right-1"}
        padding={"py-2"}
        fontSize={"text-sm"}
      />

      <UserCircleImage
        generalData={userData}
        imageWidth={"100%"}
        imageHeight={"220px"}
        rounded={""}
        marginRight={""}
      />

      <div className="w-96 m-auto">
        <div className="relative">
          <LikeButton
            myId={myId}
            generalId={userId}
            generalData={userData}
            handleData={handleGetUserData}
            discrimination={"user"}
          />
        </div>

        <div className="m-1 text-center">
          <UserName
            name={userData.name}
            fontSize={"18px"}
            fontWeight={600}
            margin={""}
          />
        </div>

        <table className="w-full">
          <TableTr trTitle={"自己紹介"} trData={userData.body} />
          <TableTr trTitle={"年齢"} trData={userData.age.toString()} />
          <TableTr trTitle={"学年"} trData={userData.gradeCode} />
          <TableTr trTitle={"性別"} trData={userData.genderCode} />
          <TableTr trTitle={"専攻分野"} trData={userData.subjectCode} />
          <TableTr trTitle={"居住地"} trData={userData.prefectureCode} />
          <TableTr trTitle={"出身地"} trData={userData.birthplaceCode} />
          <TableTrTags trTitle={"研究タグ"} trData={tagsData} />
          <TableTrHobby trTitle={"趣味"} trData={hobbyData} />
          <TableTrInterest trTitle={"興味分野"} trData={interestData} />
        </table>
      </div>
    </>
  );
};

export default UserItem;
