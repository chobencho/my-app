// Interface
import { UserData } from 'interfaces/index';
import { UserHobbyData } from 'interfaces/index';
import { UserInterestData } from 'interfaces/index';
import { UserTagData } from 'interfaces/index';
// Components
import LikeButton from 'views/components/modules/common/LikeButton';

import JudgeLogin from 'views/components/block/JudgeLogin';
import UserCircleImage from 'views/components/block/UserCircleImage';
import UserName from 'views/components/block/UserName';
import ShowVariousImage from 'views/components/atoms/ShowVariousImage';
import ShowVariousText from 'views/components/atoms/ShowVariousText';
import UserDataTable from 'views/components/block/user/UserDataTable';

export interface UserItemProps {
    myId: string | undefined;
    userId: string | undefined;
    handleFetchUserData: Function;
    userData: UserData;
    hobbyData: UserHobbyData[];
    interestData: UserInterestData[];
    tagsData: UserTagData[];
}

const UserItem = ({
    myId,
    userId,
    handleFetchUserData,
    userData,
    hobbyData,
    interestData,
    tagsData,
}: UserItemProps) => {
    return (
        <>
            <JudgeLogin
                generalData={userData}
                position={'absolute right-1'}
                padding={'py-2'}
                fontSize={'text-sm'}
            />

            <ShowVariousImage
                generalData={userData}
                alt={'user image'}
                classContent={'object-cover'}
                imageWidth={'100%'}
                imageHeight={'auto'}
                maxImageHeight={'40vh'}
                rounded={''}
                margin={''}
            />

            <div className="w-base m-auto">
                <div className="relative ">
                    <LikeButton
                        myId={myId}
                        generalId={userId}
                        generalData={userData}
                        handleData={handleFetchUserData}
                        discrimination={'user'}
                    />
                </div>

                <div className="text-center">
                    <ShowVariousText
                        fontSize={'18px'}
                        fontWeight={600}
                        margin={'10px'}
                        classContent={'text-gray-800 dark:text-white'}
                        textContent={userData.name}
                        optionContent={''}
                    />
                </div>

                <UserDataTable
                    userData={userData}
                    hobbyData={hobbyData}
                    interestData={interestData}
                    tagsData={tagsData}
                />
            </div>
        </>
    );
};

export default UserItem;
