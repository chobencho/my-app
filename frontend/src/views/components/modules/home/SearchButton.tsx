// Common
import { useState } from 'react';
// Style
import SearchIcon from '@mui/icons-material/Search';
// Components
import ModalSearchForm from 'views/components/modules/home/ModalSearchForm';
import ShowVariousText from 'views/components/atoms/ShowVariousText';
// Helper
import { openModal } from 'lib/api/helper';
import { clearModal } from 'lib/api/helper';

interface ModalSearchFormProps {
    handleFetchUsersData: Function;
    stringMyId: string;
}

const SearchButton = ({ handleFetchUsersData, stringMyId }: ModalSearchFormProps) => {
    // State
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleClearModal = () => {
        clearModal(setShowModal);
    };
    const handleShowModal = () => {
        openModal(setShowModal);
    };

    return (
        <>
            <div
                className="text-black px-1 text-xl flex items-center cursor-pointer"
                onClick={handleShowModal}
            >
                <SearchIcon fontSize="medium" />
                <ShowVariousText
                    fontSize={'16px'}
                    margin={'0px'}
                    fontWeight={0}
                    classContent={''}
                    textContent={'キーワード検索'}
                    optionContent={''}
                />
            </div>
            {showModal ? (
                <ModalSearchForm
                    onClose={handleClearModal}
                    handleFetchUsersData={handleFetchUsersData}
                    stringMyId={stringMyId ?? ''}
                />
            ) : null}
        </>
    );
};

export default SearchButton;
