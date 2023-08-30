import { UserData } from "interfaces/index";
import moment from "moment"; // moment ライブラリをインポート

export interface JudgeLoginProps {
  generalData: UserData;
  position: string;
  padding: string;
  fontSize: string;
}
const JudgeLogin = ({
  generalData,
  position,
  padding,
  fontSize,
}: JudgeLoginProps) => {
  const lastLoginTime = moment(generalData.lastLogin);
  const currentTime = moment();
  const timeDifference = currentTime.diff(lastLoginTime, "minutes");

  let stateLogin = "";
  let iconColor = "";

  if (timeDifference <= 10) {
    stateLogin = "ログイン中";
    iconColor = "text-green-300";
  } else if (timeDifference <= 1440) {
    stateLogin = "24時間以内";
    iconColor = "text-yellow-300";
  } else {
    stateLogin = "3日以上";
    iconColor = "text-gray-300";
  }

  return (
    <div className="relative">
      <p className={`${position} ${padding} ${fontSize}`}>
        <span className={`${iconColor}`}>●</span>
        <>{stateLogin}</>
      </p>
    </div>
  );
};

export default JudgeLogin;
