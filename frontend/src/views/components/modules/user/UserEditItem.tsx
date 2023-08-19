// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Hobby from "options/hobby";
import Interest from "options/interest";

import TableTr from "views/components/block/TableTr";
import { FaStarOfDavid } from "react-icons/fa";

interface UserEditItemProps {
  userData: UserData;
  userHobbyData: UserHobbyData[];
  userInterestData: UserInterestData[];
  userResearchTagData: UserTagData[];
}

const useStyles = makeStyles((theme: Theme) => ({
  tr: {
    display: "block",
    borderBottom: "1px solid #eee",
    margin: "10px 0 0",
    paddingBottom: "5px",
  },
  trLeft: {
    fontSize: "14px",
    fontWeight: 600,
    width: "80px",
  },
  trRight: {
    fontSize: "14px",
    whiteSpace: "pre-wrap",
  },
  userImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
}));

const UserEditItem = ({
  userData,
  userHobbyData,
  userInterestData,
  userResearchTagData,
}: UserEditItemProps) => {
  const classes = useStyles();

  return (
    <>
      {userData.image?.url ? (
        <img
          src={userData.image.url}
          alt="userData image"
          className={`${classes.userImage}`}
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/images/common/no-image.jpg`}
          alt="boardData image"
          className={`${classes.userImage}`}
        />
      )}

      <div className="w-96 m-auto">
        <p className="text-center m-1 text-lg font-semibold">{userData.name}</p>

        <table className="w-full">
          <TableTr trTitle={"自己紹介"} trData={userData.body} />
          <TableTr trTitle={"年齢"} trData={userData.age} />
          <TableTr trTitle={"学年"} trData={userData.gradeCode} />
          <TableTr trTitle={"性別"} trData={userData.genderCode} />
          <TableTr trTitle={"専攻分野"} trData={userData.subjectCode} />
          <TableTr trTitle={"居住地"} trData={userData.prefectureCode} />
          <TableTr trTitle={"出身地"} trData={userData.birthplaceCode} />
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>研究タグ</td>
            <td className={`${classes.trRight}`}>
              <div className="flex flex-wrap">
                {userResearchTagData.map((tag) => (
                  <p
                    key={tag.id}
                    className="bg-blue-base rounded-3xl text-white py-1 px-3 mr-1 mb-1"
                  >
                    {tag.tagName}
                  </p>
                ))}
              </div>
            </td>
          </tr>
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>趣味</td>
            <td className={`${classes.trRight}`}></td>
            <div className="flex flex-wrap">
              {userHobbyData.map((hobby) => {
                const hobbyOption = Hobby.HOB_OPTIONS.find(
                  (option) => option[0] === parseInt(hobby.hobbyId)
                );
                console.log(hobbyOption);
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
          </tr>
          <tr className="mt-1 pb-1 block">
            <td className={`${classes.trLeft}`}>興味分野</td>
            <td className={`${classes.trRight}`}></td>
            <div className="flex flex-wrap">
              {userInterestData.map((interest) => {
                const interestOption = Interest.INT_OPTIONS.find(
                  (option) => option[0] === parseInt(interest.interestId)
                );
                if (interestOption) {
                  const [, interestName, interestImage] = interestOption;
                  return (
                    <div
                      key={interest.interestId}
                      className="w-1/5 p-1 relative"
                    >
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
          </tr>
        </table>
      </div>
    </>
  );
};

export default UserEditItem;
