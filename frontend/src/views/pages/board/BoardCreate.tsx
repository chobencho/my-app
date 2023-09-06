// Common
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Function
import { createBoardData } from 'lib/api/board';
import { useAuthData } from 'views/components/modules/common/useAuthData';
// Components
import FormInputText from 'views/components/atoms/FormInputText';
import FormTextarea from 'views/components/atoms/FormTextarea';
import FormImage from 'views/components/atoms/FormImage';
import FormSubmitButton from 'views/components/atoms/FormSubmitButton';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

const BoardCreate = () => {
    const navigate = useNavigate();
    // State
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [image, setImage] = useState<File | undefined>();
    const [preview, setPreview] = useState<string>('');
    // Id
    const { stringMyId } = useAuthData();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const createForm = () => {
        const formData = new FormData();
        formData.append('user_id', stringMyId || '');
        formData.append('title', title);
        if (image) {
            formData.append('image', image);
        }
        formData.append('body', body);

        return formData;
    };

    const onSubmit = async () => {
        const formData = createForm();
        await createBoardData(formData).then(() => {
            navigate('/boards');
        });
    };

    return (
        <>
            <ShowVariousText
                fontSize={'16px'}
                fontWeight={0}
                margin={'20px 0 10px'}
                classContent={'text-center'}
                textContent={'掲示板作成'}
                optionContent={''}
            />

            <form onSubmit={handleSubmit(onSubmit)} className="w-base m-auto">
                <FormInputText
                    state={title}
                    setState={setTitle}
                    inputTitle={'タイトル'}
                    column={'title'}
                    type={'text'}
                />

                <FormImage
                    setState={setImage}
                    inputTitle={'サムネイル'}
                    preview={preview}
                    setPreview={setPreview}
                />

                <FormTextarea state={body} setState={setBody} inputTitle={'内容'} column={'body'} />
                <FormSubmitButton buttonTitle={'掲示板を作成する'} />
            </form>
        </>
    );
};

export default BoardCreate;
