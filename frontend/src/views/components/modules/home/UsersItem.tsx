// Common
import { Link } from "react-router-dom";
// Interface
import { UserData } from "interfaces/index";
import JudgeLogin from "views/components/block/JudgeLogin";
import UserName from "views/components/block/UserName";

interface UsersProps {
  handleGetUsersData: Function;
  userData: UserData;
}

const UsersItem = ({ userData }: UsersProps) => {
  return (
    <>
      <Link to={`/user/${userData.id}`} key={userData.id} className="w-1/2 p-1">
        <div className="w-full border rounded-md">
          <div className="relative w-full pt-36">
            {userData.image?.url ? (
              <img
                src={userData.image.url}
                alt="user image"
                className="absolute top-0 w-full h-full object-cover border-b rounded-t"
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/images/common/no-image.jpg`}
                alt="boardData image"
                className="absolute top-0 w-full h-full object-cover border-b rounded-t"
              />
            )}
          </div>

          <div className="py-1 px-2">
            <div className="flex w-full flex-wrap justify-between items-center">
              <UserName
                name={userData.name}
                fontSize={"16px"}
                fontWeight={600}
                margin={""}
              />
              <JudgeLogin
                generalData={userData}
                position={""}
                padding={""}
                fontSize={"text-10"}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-10">
                {userData.age}歳 {userData.prefectureCode}
              </p>

              <p className="text-10">{userData.subjectCode}専攻</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default UsersItem;
