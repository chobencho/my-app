import { useEffect, useState } from "react";
// Function
import { getUsers } from "lib/api/user";
import { getSortUsers } from "lib/api/user";
// Interface
import { UserData } from "interfaces/index";
// Components
import UsersItem from "views/components/modules/home/UsersItem";
import SearchButton from "views/components/modules/home/SearchButton";
import SortButton from "views/components/modules/home/SortButton";
import { useAuthData } from "views/components/modules/common/useAuthData";
// import Button from "views/components/atoms/Button";

const Home = () => {
  // State
  const [users, setUsers] = useState<UserData[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [sortValue, setSortValue] = useState<string>("sortLogin");
  // Style
  // Id
  const { stringMyId, verifiedAge } = useAuthData();

  // ユーザ情報を取得
  const handleGetUsersData = async (tags: string[]) => {
    getUsers(stringMyId, tags).then((res) => setUsers(res.data));
  };

  const handleSortUsersData = async (sortValue: string) => {
    getSortUsers(stringMyId, sortValue).then((res) => setUsers(res.data));
  };

  useEffect(() => {
    handleSortUsersData(sortValue);
  }, []);

  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <>
      <div className="w-96 m-auto pt-2">
        <div className="flex justify-between">
          <p className="text-xl flex items-center">
            {/* 検索ボタン */}
            <SearchButton
              handleGetUsersData={handleGetUsersData}
              stringMyId={stringMyId ?? ""}
              tags={tags}
              verifiedAge={verifiedAge}
            />
          </p>
          <div className="flex items-center">
            <SortButton handleSort={handleSortUsersData} />
          </div>
        </div>
        <div className="w-full flex flex-wrap">
          {/* ユーザ情報表示 */}
          {users.map((user) => (
            <UsersItem
              key={user.id}
              handleGetUsersData={handleGetUsersData}
              userData={user}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
