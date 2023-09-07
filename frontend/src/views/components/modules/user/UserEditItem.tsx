// Interface
import { UserData } from 'interfaces/index';
import { UserHobbyData } from 'interfaces/index';
import { UserInterestData } from 'interfaces/index';
import { UserTagData } from 'interfaces/index';
import UserDataTable from 'views/components/block/user/UserDataTable';
import ShowVariousImage from 'views/components/atoms/ShowVariousImage';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

interface UserEditItemProps {
    myId: string | undefined;
    userId: string | undefined;
    handleGetUserData: Function;
    userData: UserData;
    hobbyData: UserHobbyData[];
    interestData: UserInterestData[];
    tagsData: UserTagData[];
}

const UserEditItem = ({
    myId,
    userId,
    handleGetUserData,
    userData,
    hobbyData,
    interestData,
    tagsData,
}: UserEditItemProps) => {
    return (
        <>
            <ShowVariousImage
                generalData={userData}
                alt={'user image'}
                classContent={'object-cover border-t border-b'}
                imageWidth={'100%'}
                imageHeight={'auto'}
                maxImageHeight={'40vh'}
                rounded={''}
                margin={''}
            />

            <div className="w-base m-auto">
                <ShowVariousText
                    fontSize={'18px'}
                    fontWeight={600}
                    margin={'10px'}
                    classContent={'text-center'}
                    textContent={userData.name}
                    optionContent={''}
                />

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

export default UserEditItem;
