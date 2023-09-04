// Common
import { Link } from "react-router-dom";
// Interface
import { UserData } from "interfaces/index";
import JudgeLogin from "views/components/block/JudgeLogin";

interface UsersProps {
  handleGetUsersData: Function;
  userData: UserData;
}

const UsersItem = ({ userData }: UsersProps) => {
  return (
    <>
      <Link to={`/user/${userData.id}`} key={userData.id} className="w-1/2 p-1">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          {userData.image?.url ? (
            <img
              src={userData.image.url}
              alt="user image"
              className="w-full h-36 rounded-t-xl object-cover "
            />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
              alt="boardData image"
              className="w-full h-36 rounded-t-xl object-cover "
            />
          )}
          <div className="p-2  md:p-3">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-gray-800 dark:text-white">
                {userData.name}
              </h3>
              <JudgeLogin
                generalData={userData}
                position={""}
                padding={""}
                fontSize={"text-xs"}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-xs mt-1 text-gray-800 dark:text-gray-400">
                {userData.age}歳
                {userData.prefectureCode != "未選択" && (
                  <span className="pl-1">{userData.prefectureCode}</span>
                )}
              </p>
              <p className="text-xs mt-1 text-gray-800 dark:text-gray-400">
                {userData.subjectCode != "未選択" && (
                  <>{userData.subjectCode}専攻</>
                )}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default UsersItem;
