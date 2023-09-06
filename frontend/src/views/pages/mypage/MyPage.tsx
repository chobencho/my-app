// Common
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// Interface
import { UserDataResponse } from 'interfaces/index';
import { BoardData } from 'interfaces/index';
import { InfoData } from 'interfaces/index';
// Function
import { getEditUserData } from 'lib/api/user';
import { getMyBoards } from 'lib/api/board';
import { getMyFavBoards } from 'lib/api/board';
import { getInfos } from 'lib/api/info';
// Components
import Setting from 'views/components/modules/mypage/Setting';
import Information from 'views/components/modules/mypage/Information';
import MyBoard from 'views/components/modules/mypage/MyBoard';
import MyFav from 'views/components/modules/mypage/MyFav';
import { useAuthData } from 'views/components/modules/common/useAuthData';
import SkeletonLoaderMyPage from 'views/components/modules/mypage/SkeletonLoaderMyPage';
import ShowVariousImage from 'views/components/atoms/ShowVariousImage';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

const MyPage = () => {
    const navigate = useNavigate();
    // State
    const [user, setUser] = useState<UserDataResponse | null>(null);
    const [infos, setInfos] = useState<InfoData[]>([]);
    const [myBoards, setMyBoards] = useState<BoardData[]>([]);
    const [likeBoards, setLikeBoards] = useState<BoardData[]>([]);
    const [settingButtonActive, setSettingButtonActive] = useState<boolean>(true);
    const [myBoardButtonActive, setMyBoardButtonActive] = useState<boolean>(false);
    const [likeBoardButtonActive, setLikeBoardButtonActive] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showSkeleton, setShowSkeleton] = useState(true);
    // Id
    const { id, stringMyId } = useAuthData();

    const handleSettingClick = () => {
        setSettingButtonActive(true);
        setMyBoardButtonActive(false);
        setLikeBoardButtonActive(false);
    };

    const handleMyBoardClick = () => {
        setSettingButtonActive(false);
        setMyBoardButtonActive(true);
        setLikeBoardButtonActive(false);
    };

    const handleLikeBoardClick = () => {
        setSettingButtonActive(false);
        setMyBoardButtonActive(false);
        setLikeBoardButtonActive(true);
    };

    const handleGetUserData = async () => {
        try {
            const res = await getEditUserData(id);
            setUser(res.data);
        } catch (error: any) {
            if (error.response && error.response.status === 403) {
                navigate('/error');
            } else {
                console.error('エラーが発生しました:', error);
            }
        }
    };

    const handleGetInfos = async () => {
        getInfos().then((res) => setInfos(res.data));
    };

    const handleGetBoardData = async () => {
        getMyBoards(id).then((res) => setMyBoards(res.data));
    };

    const handleGetMyFavBoardData = async () => {
        getMyFavBoards(stringMyId).then((res) => setLikeBoards(res.data));
    };

    const userData = user?.userData;

    useEffect(() => {
        if (user === null) {
            handleGetUserData();
        }
    }, [user]);

    useEffect(() => {
        handleGetInfos();
        handleGetBoardData();
        handleGetMyFavBoardData();
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
            setShowSkeleton(false);
        }, 200);

        return () => clearTimeout(delay);
    }, []);

    return (
        <>
            {isLoading ? (
                <SkeletonLoaderMyPage />
            ) : (
                <>
                    <div className="p-5">
                        {userData && (
                            <>
                                <div className="flex items-center justify-center">
                                    <ShowVariousImage
                                        generalData={userData}
                                        alt={'user image'}
                                        classContent={'object-cover border'}
                                        imageWidth={'160px'}
                                        imageHeight={'160px'}
                                        maxImageHeight={''}
                                        rounded={'100%'}
                                        margin={''}
                                    />
                                </div>

                                <ShowVariousText
                                    fontSize={'20px'}
                                    fontWeight={0}
                                    margin={'10px 0 3px'}
                                    classContent={'text-center'}
                                    textContent={userData.name}
                                    optionContent={''}
                                />

                                <div className="flex justify-center">
                                    <ShowVariousText
                                        fontSize={'14px'}
                                        fontWeight={0}
                                        margin={'0 2px'}
                                        classContent={'text-center'}
                                        textContent={userData.age}
                                        optionContent={'歳'}
                                    />
                                    {userData.prefectureCode != '未選択' && (
                                        <ShowVariousText
                                            fontSize={'14px'}
                                            fontWeight={0}
                                            margin={'0 2px'}
                                            classContent={'text-center'}
                                            textContent={userData.prefectureCode}
                                            optionContent={''}
                                        />
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex w-full pb-5 px-3">
                        <Link
                            to={`/user/${id}/edit`}
                            className="inline-block w-1/2 text-sm text-center"
                        >
                            <button className="w-4/5 bg-gray-600 text-white p-3 rounded-full">
                                プロフィール編集
                            </button>
                        </Link>
                        <Link
                            to={`/verification`}
                            className="inline-block w-1/2 text-sm text-center"
                        >
                            <button className="w-4/5 bg-gray-600 text-white p-3 rounded-full">
                                年齢確認
                            </button>
                        </Link>
                    </div>
                    <div className="flex justify-between py-3">
                        <div
                            className={`w-1/3 text-center border-b p-1 ${
                                settingButtonActive ? 'border-b border-blue-base' : null
                            }`}
                        >
                            <button className="text-base" onClick={handleSettingClick}>
                                各種設定
                            </button>
                        </div>
                        <div
                            className={`w-1/3 text-center border-b p-1 ${
                                myBoardButtonActive ? 'border-b border-blue-base' : null
                            }`}
                        >
                            <button className="text-base" onClick={handleMyBoardClick}>
                                自分の掲示板
                            </button>
                        </div>
                        <div
                            className={`w-1/3 text-center border-b p-1 ${
                                likeBoardButtonActive ? 'border-b border-blue-base' : null
                            }`}
                        >
                            <button className="text-base" onClick={handleLikeBoardClick}>
                                いいね
                            </button>
                        </div>
                    </div>

                    {settingButtonActive && (
                        <div className="w-base sm:w-3/4 m-auto">
                            <Information infos={infos} />
                            <Setting />
                        </div>
                    )}

                    {myBoardButtonActive && (
                        <div className="w-base m-auto">
                            <MyBoard boards={myBoards} handleBoardData={handleGetBoardData} />
                        </div>
                    )}

                    {likeBoardButtonActive && (
                        <div className="w-base m-auto">
                            <MyFav boards={likeBoards} handleBoardData={handleGetMyFavBoardData} />
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default MyPage;
