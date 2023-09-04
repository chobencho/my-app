import { UserData } from 'interfaces/index';
import { UserHobbyData } from 'interfaces/index';
import { UserInterestData } from 'interfaces/index';
import { UserTagData } from 'interfaces/index';
import ColUserTable from 'views/components/block/user/ColUserTable';
import ColUserTableTags from 'views/components/block/user/ColUserTableTags';
import ColUserTableHobby from 'views/components/block/user/ColUserTableHobby';
import ColUserTableInterest from 'views/components/block/user/ColUserTableInterest';

export interface UserDataTableProps {
    userData: UserData;
    hobbyData: UserHobbyData[];
    interestData: UserInterestData[];
    tagsData: UserTagData[];
}

const UserDataTable = ({ userData, hobbyData, interestData, tagsData }: UserDataTableProps) => {
    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                <ColUserTable trTitle={'自己紹介'} trData={userData.body} />
                                <ColUserTable trTitle={'年齢'} trData={userData.age} />
                                <ColUserTable trTitle={'学年'} trData={userData.gradeCode} />
                                <ColUserTable trTitle={'性別'} trData={userData.genderCode} />
                                <ColUserTable trTitle={'専攻分野'} trData={userData.subjectCode} />
                                <ColUserTable trTitle={'居住地'} trData={userData.prefectureCode} />
                                <ColUserTable trTitle={'出身地'} trData={userData.birthplaceCode} />
                                <ColUserTableTags trTitle={'研究タグ'} trData={tagsData} />
                                <ColUserTableHobby trTitle={'趣味'} trData={hobbyData} />
                                <ColUserTableInterest trTitle={'興味分野'} trData={interestData} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDataTable;
