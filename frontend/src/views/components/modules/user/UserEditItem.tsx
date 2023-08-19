// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TableTr from "views/components/block/TableTr";

interface UserEditItemProps {
  myId: string | undefined;
  userId: string | undefined;
  handleGetUserData: Function;
  userData: UserData;
  hobbyData: UserHobbyData[];
  interestData: UserInterestData[];
  researchTagData: UserTagData[];
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
  myId,
  userId,
  handleGetUserData,
  userData,
  hobbyData,
  interestData,
  researchTagData,
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
          <TableTr trTitle={"研究タグ"} trData={researchTagData} />
          <TableTr trTitle={"趣味"} trData={hobbyData} />
          <TableTr trTitle={"興味分野"} trData={interestData} />
        </table>
      </div>
    </>
  );
};

export default UserEditItem;
