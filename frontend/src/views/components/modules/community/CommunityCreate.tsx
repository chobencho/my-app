import { useState, useContext } from 'react';
import { AuthContext } from 'App';
// Components
import ModalApplyNewCommunity from 'views/components/modules/community/ModalApplyNewCommunity';

const CommunityCreate = () => {
    const [showModal, setShowModal] = useState(false);
    const { verifiedAge } = useContext(AuthContext);

    const handleModalApplyNewCommunity = () => {
        setShowModal(true);
    };

    const handleClearPreview = () => {
        setShowModal(false);
    };
    return (
        <>
            <div className="text-center my-5">
                <button
                    className={`relative border w-1/2 rounded-3xl p-3 bg-blue-base text-white`}
                    onClick={() => handleModalApplyNewCommunity()}
                    disabled={!verifiedAge}
                >
                    <span className="text-sm">新規コミュニティ申請</span>
                    {verifiedAge ? null : (
                        <p
                            className="absolute  w-full rounded-3xl py-3 top-0 left-0 text-white"
                            style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)' }}
                        >
                            年齢確認が未完了です
                        </p>
                    )}
                </button>
            </div>

            {/* 新規コミュニティ申請モーダル */}
            {showModal ? <ModalApplyNewCommunity onClose={handleClearPreview} /> : null}
        </>
    );
};

export default CommunityCreate;
