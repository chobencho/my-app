import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState, useContext } from 'react';
import { AuthContext } from 'App';
// Style
import { makeStyles, Theme } from '@material-ui/core/styles';
// Function
import { sendMailApplyNewCommunity } from 'lib/api/community';
import { useAuthData } from 'views/components/modules/common/useAuthData';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FormInputText from 'views/components/atoms/FormInputText';
import FormTextarea from 'views/components/atoms/FormTextarea';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

export interface ModalApplyNewCommunityProps {
    onClose: Function;
}

const useStyles = makeStyles((theme: Theme) => ({
    modal: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
    },
    modalContent: {
        width: '80%',
        maxHeight: '80%',
        background: '#fff',
        padding: '5px',
    },
    modalImg: {
        display: 'block',
        margin: '0 auto',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const ModalApplyNewCommunity = ({ onClose }: ModalApplyNewCommunityProps) => {
    const classes = useStyles();
    // State
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    // Id
    const { stringMyId } = useAuthData();
    const {
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async () => {
        if (stringMyId !== undefined) {
            await sendMailApplyNewCommunity(stringMyId, title, body).then(() => {
                onClose();
            });
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full h-full bg-gray-600 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center z-50"
            >
                <div className="max-modal bg-white p-2">
                    <button onClick={() => onClose()} className="">
                        <HighlightOffIcon />
                    </button>

                    <ShowVariousText
                        fontSize={'14px'}
                        fontWeight={0}
                        margin={'5px 8px'}
                        classContent={'text-center'}
                        textContent={'新規コミュニティを申請する'}
                        optionContent={''}
                    />

                    <FormInputText
                        state={title}
                        setState={setTitle}
                        inputTitle={'コミュニティ名'}
                        column={'title'}
                        type={'text'}
                    />
                    <FormTextarea
                        state={body}
                        setState={setBody}
                        inputTitle={'概要'}
                        column={'body'}
                    />

                    <div className="my-5 px-3 text-center">
                        <button
                            type="submit"
                            className="text-white bg-blue-base w-full text-xs py-2 px-5"
                        >
                            新規コミュニティ申請
                        </button>
                        <div className="py-3">
                            <ShowVariousText
                                fontSize={'10px'}
                                fontWeight={0}
                                margin={''}
                                classContent={'text-gray-800'}
                                textContent={'※注意※'}
                                optionContent={''}
                            />
                            <ShowVariousText
                                fontSize={'10px'}
                                fontWeight={0}
                                margin={'5px 8px'}
                                classContent={'text-gray-800'}
                                textContent={
                                    '他人の誹謗中傷や公序良俗に反するコミュニティであると判断される場合は、申請を否認する可能性があります。'
                                }
                                optionContent={''}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ModalApplyNewCommunity;
