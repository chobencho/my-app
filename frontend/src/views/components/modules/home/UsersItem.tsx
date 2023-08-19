import { Link } from "react-router-dom";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Interface
import { UserData } from "interfaces/index";
import JudgeLogin from "views/components/block/JudgeLogin";

interface UsersProps {
  handleGetUsersData: Function;
  userData: UserData;
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    textAlign: "center",
  },
  cardContainer: {
    width: "50%",
    padding: "1%",
  },
  card: {
    width: "100%",
    border: "0.1px solid #eee",
  },
  box: {
    width: "50%",
    border: "1px solid #000",
  },
  cardContent: {
    padding: "5px",
  },
  flexbox: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  squareImageContainer: {
    width: "100%",
    paddingTop: "100%", // 1:1のアスペクト比を設定
    position: "relative",
  },
  squareImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover", // 画像をコンテナに収める
    borderBottom: "0.5px solid #eee",
  },
  name: {
    fontSize: "14px",
    fontWeight: 600,
  },
  login: {
    fontSize: "10px",
  },
  age: {
    fontSize: "12px",
  },
}));

const UsersItem = ({ userData }: UsersProps) => {
  //Style
  const classes = useStyles();

  return (
    <>
      <Link to={`/user/${userData.id}`} key={userData.id} className="w-1/2 p-1">
        <div className="w-full border rounded-md">
          {userData.image?.url ? (
            <div className="relative w-full pt-36">
              <img
                src={userData.image.url}
                alt="user image"
                className="absolute top-0 w-full h-full object-cover border-b rounded-t"
              />
            </div>
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/common/no-image.jpg`}
              alt="boardData image"
              className="absolute top-0 w-full h-full object-cover border-b rounded-t"
            />
          )}

          <div className="py-1 px-2">
            <div className="flex w-full flex-wrap justify-between items-center">
              <p className="text-base font-semibold">{userData.name}</p>
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
