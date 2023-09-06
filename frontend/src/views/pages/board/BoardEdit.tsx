import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Function
import { getEditBoardData } from 'lib/api/board';
// Interface
import { BoardData } from 'interfaces/index';
// Components
import BoardEditForm from 'views/components/modules/board/BoardEditForm';
import BoardEditItem from 'views/components/modules/board/BoardEditItem';
import { useAuthData } from 'views/components/modules/common/useAuthData';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

const BoardEdit = () => {
    // State
    const [boardData, setBoardData] = useState<BoardData | null>(null);
    // Id
    const { id, stringMyId } = useAuthData();

    const navigate = useNavigate();

    // 掲示板情報を取得
    const handleGetBoardData = async () => {
        try {
            const response = await getEditBoardData(id);
            setBoardData(response.data);
        } catch (error: any) {
            if (error.response && error.response.status === 403) {
                navigate('/error');
            } else {
                console.error('エラーが発生しました:', error);
            }
        }
    };

    useEffect(() => {
        handleGetBoardData();
    }, []);

    return (
        <>
            <ShowVariousText
                fontSize={'16px'}
                fontWeight={0}
                margin={'20px 0 10px'}
                classContent={'text-center'}
                textContent={'掲示板編集'}
                optionContent={''}
            />

            {boardData !== null && (
                <>
                    {/* 掲示板編集フォーム */}
                    <BoardEditForm
                        id={id || ''}
                        handleGetBoardData={handleGetBoardData}
                        boardData={boardData}
                    />
                    <div className="border-t w-base mx-auto mt-5 py-2">
                        <p className="m-1">プレビュー</p>
                    </div>
                    {/* 掲示板プレビュー */}
                    <BoardEditItem boardData={boardData} />
                </>
            )}
        </>
    );
};

export default BoardEdit;
