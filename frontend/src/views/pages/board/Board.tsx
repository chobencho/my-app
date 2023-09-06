// Common
import { useEffect, useState } from 'react';
// Function
import { fetchBoardData } from 'lib/api/board';
import { fetchBoardComment } from 'lib/api/boardComment';
import { fetchCommonRoomId } from 'lib/api/common';
// Interface
import { BoardData } from 'interfaces/index';
import { CommentData } from 'interfaces/index';
// Components
import PageSwitcherButton from 'views/components/atoms/PageSwitcherButton';
import BoardContent from 'views/components/modules/board/BoardContent';
import CommentItem from 'views/components/block/board/CommentItem';
import VariousMessageForm from 'views/components/atoms/VariousMessageForm';
import { useAuthData } from 'views/components/modules/common/useAuthData';
import SkeletonLoaderBoard from 'views/components/modules/board/SkeletonLoaderBoard';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

const Board = () => {
    // State
    const [board, setBoard] = useState<BoardData | null>(null);
    const [comments, setComments] = useState<CommentData[]>([]);
    const [commonRoomId, setCommonRoomId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [showSkeleton, setShowSkeleton] = useState<boolean>(true);
    // Id
    const { stringMyId, id, verifiedAge } = useAuthData();

    // 掲示板情報を取得
    const handleFetchBoardData = async () => {
        fetchBoardData(id).then((res) => {
            setBoard(res.data);
            handleFetchCommonRoomId(res.data.userId);
        });
    };
    // コメント情報を取得
    const handleFetchBoardComment = async () => {
        fetchBoardComment(id).then((res) => setComments(res.data));
    };

    // 自分と相手のチャットルームがすでに存在するか確認する関数
    const handleFetchCommonRoomId = (userId: string) => {
        fetchCommonRoomId(userId, stringMyId).then((res) => setCommonRoomId(res.data));
    };

    useEffect(() => {
        handleFetchBoardData();
    }, [id]);

    useEffect(() => {
        handleFetchBoardComment();
    }, [board]);

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
                <SkeletonLoaderBoard />
            ) : (
                <>
                    {board && (
                        <>
                            <div>
                                <BoardContent
                                    board={board}
                                    handleGetBoardData={handleFetchBoardData}
                                    boardId={board.id.toString()}
                                    myId={stringMyId || ''}
                                    generalId={id || ''}
                                />

                                <PageSwitcherButton
                                    userId={board.userId || ''}
                                    myId={stringMyId || ''}
                                    generalId={id || ''}
                                    verifiedAge={verifiedAge}
                                    commonRoomId={commonRoomId || ''}
                                    discrimination={'board'}
                                />

                                <div className="border-b border-t w-base mx-auto py-2">
                                    <ShowVariousText
                                        fontSize={'16px'}
                                        fontWeight={0}
                                        margin={'5px'}
                                        classContent={''}
                                        textContent={'コメント'}
                                        optionContent={''}
                                    />
                                    <VariousMessageForm
                                        handleGetData={handleFetchBoardComment}
                                        id={id ?? ''}
                                        stringMyId={stringMyId ?? ''}
                                        another_id={'board_id'}
                                        discrimination={'board'}
                                    />
                                </div>

                                {comments.map((comment: CommentData) => (
                                    <CommentItem comment={comment} key={comment.commentId} />
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Board;
