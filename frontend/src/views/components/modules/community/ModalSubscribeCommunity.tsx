// Function
import { subscribeCommunity } from 'lib/api/community';
// Components
import GoBackButton from 'views/components/block/GoBackButton';
import Fade from '@mui/material/Fade';
import ShowVariousText from 'views/components/atoms/ShowVariousText';
import FormSubmitButton from 'views/components/atoms/FormSubmitButton';

export interface ModalSubscribeProps {
    community_id: string | undefined;
    user_id: string | undefined;
    handleGetSubscribedCommunity: Function;
    isModalOpen: boolean;
}

const ModalSubscribeCommunity = ({
    community_id,
    user_id,
    handleGetSubscribedCommunity,
    isModalOpen,
}: ModalSubscribeProps) => {
    // 送信用フォームデータ作成関数
    const createFormData = (): FormData => {
        const formData = new FormData();

        formData.append('community_id', community_id ? community_id : '');
        formData.append('user_id', user_id ? user_id : '');

        return formData;
    };

    const handleSubscribeCommunity = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = createFormData();

        await subscribeCommunity(data).then(() => {
            handleGetSubscribedCommunity();
        });
    };

    return (
        <>
            <Fade in={isModalOpen} timeout={500}>
                <div className="w-full h-full bg-gray-600 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center z-50">
                    <div className="max-modal bg-white px-2 py-5 text-center">
                        <ShowVariousText
                            fontSize={'14px'}
                            fontWeight={0}
                            margin={'20px 0'}
                            classContent={''}
                            textContent={'このコミュニティに参加しますか？'}
                            optionContent={''}
                        />
                        <div className="w-4/5 flex justify-between m-auto mb-5">
                            <form onSubmit={handleSubscribeCommunity} className="w-1/2">
                                <button
                                    type="submit"
                                    className="bg-blue-base text-white text-sm py-1 w-4/5"
                                >
                                    参加する
                                </button>
                            </form>
                            <GoBackButton discriminationText={'参加しない'} />
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default ModalSubscribeCommunity;
