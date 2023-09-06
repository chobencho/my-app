import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { InfoData } from 'interfaces/index';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

export interface ModalInformationProps {
    info: InfoData | null;
    onClose: Function;
}

const ModalInformation = ({ onClose, info }: ModalInformationProps) => {
    return (
        <>
            <div className="w-full h-full bg-gray-600 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center z-50">
                <p className="max-modal bg-white p-2">
                    <button onClick={() => onClose()} className="">
                        <HighlightOffIcon />
                    </button>
                    {info && (
                        <div>
                            <ShowVariousText
                                fontSize={'16px'}
                                fontWeight={0}
                                margin={''}
                                classContent={'text-center'}
                                textContent={info.title}
                                optionContent={''}
                            />
                            <ShowVariousText
                                fontSize={'12px'}
                                fontWeight={0}
                                margin={'24px'}
                                classContent={'whitespace-pre-wrap w-4/5'}
                                textContent={info.body}
                                optionContent={''}
                            />
                        </div>
                    )}
                </p>
            </div>
        </>
    );
};

export default ModalInformation;
