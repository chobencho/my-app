// Common
import { Link } from 'react-router-dom';
// Interface
import { BoardData } from 'interfaces/index';
// Components
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
                    <div className="bg-white rounded-xl shadow-sm sm:flex shadow-slate-500/[.7]">
                        <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:rounded-tr-none sm:max-w-[15rem] ">
                            <ShowVariousImage
                                generalData={board}
                                alt={'board image'}
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
                                <ShowVariousText
                                    fontSize={'18px'}
                                    fontWeight={600}
                                    margin={'0px'}
                                    classContent={'text-gray-800 txt-limit-2'}
                                    textContent={board.title}
                                    optionContent={''}
                                />

                                <ShowVariousText
                                    fontSize={'16px'}
                                    fontWeight={0}
                                    margin={'5px 0 0'}
                                    classContent={'text-gray-800 txt-limit-2 whitespace-pre-wrap'}
                                    textContent={board.body}
                                    optionContent={''}
                                />

                                <div className="mt-5 sm:mt-auto flex items-center">
                                    <ShowVariousOtherImage
                                        generalData={board}
                                        alt={'user image'}
                                        classContent={'object-cover border'}
                                        imageWidth={'40px'}
                                        imageHeight={'40px'}
                                        maxImageHeight={''}
                                        rounded={'100%'}
                                        margin={'0 8px 0 0'}
                                    />

                                    <ShowVariousText
                                        fontSize={'16px'}
                                        fontWeight={0}
                                        margin={'0px'}
                                        classContent={'text-gray-800'}
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
