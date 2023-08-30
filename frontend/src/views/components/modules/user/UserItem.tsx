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
        imageHeight={"auto"}
        maxImageHeight={"40vh"}
        rounded={""}
        marginRight={""}
      />

      <div className="w-base m-auto">
        <div className="relative ">
          <LikeButton
            myId={myId}
            generalId={userId}
            generalData={userData}
            handleData={handleGetUserData}
            discrimination={"user"}
          />
        </div>

        <div className="text-center">
          <UserName
            name={userData.name}
            pcFontSize={"18px"}
            spFontSize={"18px"}
            fontWeight={600}
            margin={"10px"}
            option={""}
          />
        </div>

        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <TableTr trTitle={"自己紹介"} trData={userData.body} />
                    <TableTr trTitle={"年齢"} trData={userData.age} />
                    <TableTr trTitle={"学年"} trData={userData.gradeCode} />
                    <TableTr trTitle={"性別"} trData={userData.genderCode} />
                    <TableTr
                      trTitle={"専攻分野"}
                      trData={userData.subjectCode}
                    />
                    <TableTr
                      trTitle={"居住地"}
                      trData={userData.prefectureCode}
                    />
                    <TableTr
                      trTitle={"出身地"}
                      trData={userData.birthplaceCode}
                    />
                    <TableTrTags trTitle={"研究タグ"} trData={tagsData} />
                    <TableTrHobby trTitle={"趣味"} trData={hobbyData} />
                    <TableTrInterest
                      trTitle={"興味分野"}
                      trData={interestData}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
