// Interface
import { CommunityData } from "interfaces/index";
// Components
import CommunitiesItem from "views/components/modules/community/CommunitiesItem";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { clearModal } from "lib/api/helper";

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
      <div className="modal">
        <p className="modal-content">
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
