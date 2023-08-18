// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";

import LikeButton from "views/components/modules/common/LikeButton";
import TableTr from "views/components/block/TableTr";
import JudgeLogin from "views/components/block/JudgeLogin";
import UserImage from "views/components/block/UserImage";

import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

export interface UserItemProps {
  myId: string | undefined;
  userId: string | undefined;
  handleGetUserData: Function;
  userData: UserData;
  hobbyData: UserHobbyData[];
  interestData: UserInterestData[];
  researchTagData: UserTagData[];
}

const UserItem = ({
  myId,
  userId,
  handleGetUserData,
  userData,
  hobbyData,
  interestData,
  researchTagData,
}: UserItemProps) => {
  return (
    <>
      <JudgeLogin
        generalData={userData}
        position={"absolute right-3"}
        padding={"py-1"}
        fontSize={""}
      />

      <UserImage generalData={userData} />

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

        <p className="text-center m-1 text-lg font-semibold">{userData.name}</p>

        <table className="w-full">
          <TableTr trTitle={"自己紹介"} trData={userData.body} />
          <TableTr trTitle={"年齢"} trData={userData.age.toString()} />
          <TableTr trTitle={"学年"} trData={userData.gradeCode} />
          <TableTr trTitle={"性別"} trData={userData.genderCode} />
          <TableTr trTitle={"専攻分野"} trData={userData.subjectCode} />
          <TableTr trTitle={"居住地"} trData={userData.prefectureCode} />
          <TableTr trTitle={"出身地"} trData={userData.birthplaceCode} />
          <TableTr trTitle={"研究タグ"} trData={researchTagData} />
          <TableTr trTitle={"趣味"} trData={hobbyData} />
          <TableTr trTitle={"興味分野"} trData={interestData} />
        </table>
      </div>
    </>
  );
};

export default UserItem;
