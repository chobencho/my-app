// Common
import { Link } from 'react-router-dom';
// Interface
import { BoardData } from 'interfaces/index';
// Components
import UserCircleImage from 'views/components/block/UserCircleImage';
import OtherImage from 'views/components/block/OtherImage';
import UserName from 'views/components/block/UserName';
import ShowVariousImage from 'views/components/atoms/ShowVariousImage';
import ShowVariousOtherImage from 'views/components/atoms/ShowVariousOtherImage';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

interface BoardItemProps {
    boards: BoardData[];
    handleGetBoardData: Function;
}

const BoardsItem = ({ boards }: BoardItemProps) => {
    return (
        <>
            {boards.map((board) => (
                <Link
                    to={`/board/${board.boardId}`}
                    key={board.id}
                    className="inline-block  py-2 px-3 w-full"
                >
                    <div className="bg-white rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] border">
                        <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:rounded-tr-none sm:max-w-[15rem] ">
                            <ShowVariousImage
                                generalData={board}
                                alt={'user image'}
                                classContent={'absolute top-0 left-0 object-cover'}
                                imageWidth={'100%'}
                                imageHeight={'100%'}
                                maxImageHeight={''}
                                rounded={''}
                                margin={''}
                            />
                        </div>
                        <div className="flex flex-wrap">
                            <div className="p-4 flex flex-col h-full sm:p-4">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white txt-limit-2">
                                    {board.title}
                                </h3>
                                <p className="mt-1 text-gray-800 dark:text-gray-400 whitespace-pre-wrap txt-limit-2">
                                    {board.body}
                                </p>
                                <div className="mt-5 sm:mt-auto flex items-center">
                                    <ShowVariousOtherImage
                                        generalData={board}
                                        alt={'user image'}
                                        classContent={'object-cover border'}
                                        imageWidth={'32px'}
                                        imageHeight={'32px'}
                                        maxImageHeight={''}
                                        rounded={'100%'}
                                        margin={'0 8px 0 0'}
                                    />

                                    <ShowVariousText
                                        fontSize={'16px'}
                                        fontWeight={0}
                                        margin={'0px'}
                                        classContent={'text-gray-800 dark:text-white'}
                                        textContent={board.name}
                                        optionContent={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default BoardsItem;
