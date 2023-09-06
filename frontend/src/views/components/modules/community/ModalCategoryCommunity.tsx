// Interface
import { CommunityData } from 'interfaces/index';
// Components
import CommunitiesItem from 'views/components/block/community/CommunitiesItem';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { clearModal } from 'lib/api/helper';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

interface ModalCategoryCommunityProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCategoryData: CommunityData[];
    strSelectedCategory: string;
}

const ModalCategoryCommunity = ({
    setShowModal,
    selectedCategoryData,
    strSelectedCategory,
}: ModalCategoryCommunityProps) => {
    return (
        <>
            <div className="w-full h-full bg-gray-600 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center z-50">
                <p className="max-modal bg-white p-2">
                    <button onClick={() => clearModal(setShowModal)} className="">
                        <HighlightOffIcon />
                    </button>
                    <p className="text-center text-sm pt-1 pb-3">
                        {strSelectedCategory}カテゴリのコミュニティ一覧
                    </p>

                    <div className="overflow-scroll w-full h-80">
                        {selectedCategoryData.map((categoryCommunity) => (
                            <>
                                <CommunitiesItem
                                    community={categoryCommunity}
                                    key={categoryCommunity.id}
                                />
                            </>
                        ))}
                    </div>
                </p>
            </div>
        </>
    );
};

export default ModalCategoryCommunity;
