// Common
import { useEffect, useState } from 'react';
// Function
import { getBoards } from 'lib/api/board';
// Interface
import { BoardData } from 'interfaces/index';
// Components
import BoardsItem from 'views/components/modules/board/BoardsItem';
import { useAuthData } from 'views/components/modules/common/useAuthData';
import SkeletonLoaderBoards from 'views/components/modules/board/SkeletonLoaderBoards';
import VariousButton from 'views/components/atoms/VariousButton';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

const Boards = () => {
    // State
    const [boards, setBoards] = useState<BoardData[]>([]);
    const { verifiedAge } = useAuthData();
    const [isLoading, setIsLoading] = useState(true);
    const [showSkeleton, setShowSkeleton] = useState(true);

    const handleGetBoardData = async () => {
        getBoards().then((res) => {
            setBoards(res.data);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        handleGetBoardData();
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => {
            setShowSkeleton(false);
        }, 200);

        return () => clearTimeout(delay);
    }, []);

    return (
        <>
            {isLoading ? (
                <SkeletonLoaderBoards />
            ) : (
                <div className="w-base m-auto pb-20">
                    <ShowVariousText
                        fontSize={'16px'}
                        margin={'20px 0 10px 0'}
                        fontWeight={0}
                        classContent={'text-center'}
                        textContent={'掲示板一覧'}
                        optionContent={''}
                    />

                    {boards && (
                        <>
                            <BoardsItem boards={boards} handleGetBoardData={handleGetBoardData} />
                        </>
                    )}
                    <VariousButton
                        buttonTitle={'新規作成'}
                        toLink={'/boardCreate'}
                        verifiedAge={verifiedAge}
                        classContent={'fixed bottom-16 right-0 left-0'}
                    />
                </div>
            )}
        </>
    );
};

export default Boards;
