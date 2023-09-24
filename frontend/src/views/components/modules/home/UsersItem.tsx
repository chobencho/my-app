// Common
import { Link } from 'react-router-dom';
// Interface
import { UserData } from 'interfaces/index';
import JudgeLogin from 'views/components/block/JudgeLogin';
import ShowVariousImage from 'views/components/atoms/ShowVariousImage';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

interface UsersProps {
    handleFetchUsersData: Function;
    userData: UserData;
}

const UsersItem = ({ userData }: UsersProps) => {
    return (
        <>
            <Link to={`/user/${userData.id}`} key={userData.id} className="w-1/2 p-1">
                <div className="flex flex-col bg-white  shadow-sm rounded-xl shadow-slate-500/[.7]">
                    <ShowVariousImage
                        generalData={userData}
                        alt={'user image'}
                        classContent={'object-cover'}
                        imageWidth={'100%'}
                        imageHeight={'144px'}
                        maxImageHeight={''}
                        rounded={'10px 10px 0 0'}
                        margin={''}
                    />
                    <div className="p-2  md:p-3 bg-white rounded-b-xl">
                        <div className="flex justify-between items-center">
                            <ShowVariousText
                                fontSize={'16px'}
                                margin={''}
                                fontWeight={0}
                                classContent={'font-bold text-gray-800'}
                                textContent={userData.name}
                                optionContent={''}
                            />
                            <JudgeLogin
                                generalData={userData}
                                position={''}
                                padding={''}
                                fontSize={'text-xs'}
                            />
                        </div>
                        <div className="flex justify-between">
                            <p className="text-xs mt-1 text-gray-800 flex">
                                <ShowVariousText
                                    fontSize={'12px'}
                                    margin={''}
                                    fontWeight={0}
                                    classContent={''}
                                    textContent={userData.age}
                                    optionContent={'歳'}
                                />
                                {userData.prefectureCode != '未選択' && (
                                    <ShowVariousText
                                        fontSize={'12px'}
                                        margin={'0 0 0 5px'}
                                        fontWeight={0}
                                        classContent={''}
                                        textContent={userData.prefectureCode}
                                        optionContent={''}
                                    />
                                )}
                            </p>
                            <p className="text-xs mt-1 text-gray-800">
                                {userData.subjectCode != '未選択' && (
                                    <ShowVariousText
                                        fontSize={'12px'}
                                        margin={''}
                                        fontWeight={0}
                                        classContent={''}
                                        textContent={userData.subjectCode}
                                        optionContent={'専攻'}
                                    />
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default UsersItem;
