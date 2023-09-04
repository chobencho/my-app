// Interface
import { UserData } from 'interfaces/index';
import { UserHobbyData } from 'interfaces/index';
import { UserInterestData } from 'interfaces/index';
import { UserTagData } from 'interfaces/index';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TableTr from 'views/components/block/user/ColUserTable';

import UserCircleImage from 'views/components/block/UserCircleImage';
import TableTrTags from 'views/components/block/user/ColUserTableTags';
import TableTrHobby from 'views/components/block/user/ColUserTableHobby';
import TableTrInterest from 'views/components/block/user/ColUserTableInterest';
import UserName from 'views/components/block/UserName';

interface UserEditItemProps {
    myId: string | undefined;
    userId: string | undefined;
    handleGetUserData: Function;
    userData: UserData;
    hobbyData: UserHobbyData[];
    interestData: UserInterestData[];
    tagsData: UserTagData[];
}

const useStyles = makeStyles((theme: Theme) => ({
    tr: {
        display: 'block',
        borderBottom: '1px solid #eee',
        margin: '10px 0 0',
        paddingBottom: '5px',
    },
    trLeft: {
        fontSize: '14px',
        fontWeight: 600,
        width: '80px',
    },
    trRight: {
        fontSize: '14px',
        whiteSpace: 'pre-wrap',
    },
    userImage: {
        width: '100%',
        height: '220px',
        objectFit: 'cover',
    },
}));

const UserEditItem = ({
    myId,
    userId,
    handleGetUserData,
    userData,
    hobbyData,
    interestData,
    tagsData,
}: UserEditItemProps) => {
    const classes = useStyles();

    return (
        <>
            <UserCircleImage
                generalData={userData}
                imageWidth={'100%'}
                imageHeight={'auto'}
                maxImageHeight={''}
                rounded={''}
                marginRight={''}
            />

            <div className="w-base m-auto">
                <div className="text-center">
                    <UserName
                        name={userData.name}
                        pcFontSize={'18px'}
                        spFontSize={'18px'}
                        fontWeight={600}
                        margin={'10px'}
                        option={''}
                    />
                </div>

                <table className="w-full">
                    <TableTr trTitle={'自己紹介'} trData={userData.body} />
                    <TableTr trTitle={'年齢'} trData={userData.age} />
                    <TableTr trTitle={'学年'} trData={userData.gradeCode} />
                    <TableTr trTitle={'性別'} trData={userData.genderCode} />
                    <TableTr trTitle={'専攻分野'} trData={userData.subjectCode} />
                    <TableTr trTitle={'居住地'} trData={userData.prefectureCode} />
                    <TableTr trTitle={'出身地'} trData={userData.birthplaceCode} />
                    <TableTrTags trTitle={'研究タグ'} trData={tagsData} />
                    <TableTrHobby trTitle={'趣味'} trData={hobbyData} />
                    <TableTrInterest trTitle={'興味分野'} trData={interestData} />
                </table>
            </div>
        </>
    );
};

export default UserEditItem;
