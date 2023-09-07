// Common
import { Link } from 'react-router-dom';
// Interface
import { BoardData } from 'interfaces/index';
// Components
import LikeButton from 'views/components/block/common/LikeButton';
import CommonDeleteButton from 'views/components/modules/common/CommonDeleteButton';
import ShowVariousImage from 'views/components/atoms/ShowVariousImage';
import ShowVariousOtherImage from 'views/components/atoms/ShowVariousOtherImage';
import ShowVariousText from 'views/components/atoms/ShowVariousText';
import ShowMoment from 'views/components/atoms/ShowMoment';

type BoardContentProps = {
    board: BoardData;
    boardId: string;
    myId: string;
    handleGetBoardData: Function;
    generalId: string;
};

const BoardContent = ({
    board,
    boardId,
    myId,
    handleGetBoardData,
    generalId,
}: BoardContentProps) => {
    return (
        <>
            <ShowVariousImage
                generalData={board}
                alt={'user image'}
                classContent={'object-cover'}
                imageWidth={'100%'}
                imageHeight={'220px'}
                maxImageHeight={''}
                rounded={''}
                margin={''}
            />
            <div className="w-base m-auto">
                <ShowVariousText
                    fontSize={'20px'}
                    fontWeight={0}
                    margin={'8px 0'}
                    classContent={''}
                    textContent={board.title}
                    optionContent={''}
                />
                <div className="flex justify-between">
                    <Link to={`/user/${board.userId}`} className="flex my-auto items-center ">
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
                        <div>
                            <ShowVariousText
                                fontSize={'14px'}
                                fontWeight={0}
                                margin={'0 0 0 5px'}
                                classContent={''}
                                textContent={board.name}
                                optionContent={''}
                            />
                            <ShowMoment
                                fontSize={'12px'}
                                margin={'0 0 0 5px'}
                                classContent={''}
                                time={board.createdAt}
                                format={'YYYY年MM月DD日 HH:mm'}
                            />
                        </div>
                    </Link>

                    <div className="relative">
                        <LikeButton
                            myId={myId}
                            generalId={boardId}
                            generalData={board}
                            handleData={handleGetBoardData}
                            discrimination={'board'}
                        />
                    </div>
                </div>
                <ShowVariousText
                    fontSize={'14px'}
                    fontWeight={0}
                    margin={'20px 0'}
                    classContent={'whitespace-pre-wrap'}
                    textContent={board.boardBody}
                    optionContent={''}
                />

                {myId === board.userId && (
                    <CommonDeleteButton generalId={generalId} discrimination={'board'} />
                )}
            </div>
        </>
    );
};

export default BoardContent;
