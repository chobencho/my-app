// Common
import { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Style
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import TocIcon from '@mui/icons-material/Toc';
import ModalDeleteForm from 'views/components/modules/message/ModalDeleteForm';
import ShowVariousImage from 'views/components/atoms/ShowVariousImage';
// Function

// Interface
import { ChatUserData } from 'interfaces';

interface ChatPartnerProps {
    buddy: ChatUserData;
    generalId: string;
}

const ChatPartner = ({ buddy, generalId }: ChatPartnerProps) => {
    const navigate = useNavigate();
    // State
    const [showModal, setShowModal] = useState<boolean>(false);

    // モーダル非表示
    const handleClearModal = () => {
        setShowModal(false); // モーダルを非表示にする
    };

    // モーダル表示
    const showModalWindow = useCallback(() => {
        setShowModal(true); // 画像が選択されたときにモーダルを表示
    }, []);

    return (
        <>
            <div className="fixed top-12 sm:h-14 bg-white w-full flex justify-between items-center max-w-540 p-2">
                {buddy && (
                    <div className="flex">
                        <span
                            onClick={() => navigate('/messages')}
                            className="flex items-center mr-2"
                        >
                            <ExpandCircleDownOutlinedIcon className="rotate-90" />
                        </span>
                        <Link to={`/user/${buddy.id}`}>
                            <ShowVariousImage
                                generalData={buddy}
                                alt={'chat image'}
                                classContent={'object-cover border'}
                                imageWidth={'36px'}
                                imageHeight={'36px'}
                                maxImageHeight={''}
                                rounded={'100%'}
                                margin={'0 5px 0 0'}
                            />
                        </Link>
                        <p className="flex items-center">{buddy.name}</p>
                    </div>
                )}
                <div>
                    <TocIcon onClick={showModalWindow} />
                </div>
            </div>

            {showModal ? (
                <ModalDeleteForm onClose={handleClearModal} generalId={generalId} />
            ) : null}
        </>
    );
};

export default ChatPartner;
