import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { onReset } from 'views/components/modules/common/authAction';
import { ResetPasswordParams } from 'interfaces/index';
import AlertMessage from 'views/components/atoms/AlertMessage';
import TextField from '@material-ui/core/TextField';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

type ResetFormProps = {
    resetPasswordToken: string;
};

const ResetForm = ({ resetPasswordToken }: ResetFormProps) => {
    const navigate = useNavigate();
    const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
    const [alertConfirmMessageOpen, setAlertConfirmMessageOpen] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

    const isButtonDisabled = !password || !passwordConfirmation;

    const handlePasswordReset = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const params: ResetPasswordParams = {
            password: password,
            passwordConfirmation: passwordConfirmation,
            resetPasswordToken: resetPasswordToken,
        };

        try {
            const res = await onReset(params);
            console.log(res);

            if (res.status === 200) {
                Cookies.set('_access_token', res.headers['access-token']);
                Cookies.set('_client', res.headers['client']);
                Cookies.set('_uid', res.headers['uid']);
                setAlertConfirmMessageOpen(true);

                setTimeout(() => {
                    navigate('/signin');
                }, 3000);
            } else {
                setAlertMessageOpen(true);
            }
        } catch (err) {
            setAlertMessageOpen(true);
        }
    };

    return (
        <>
            <form className="w-4/5 m-auto">
                <ShowVariousText
                    fontSize={'14px'}
                    fontWeight={0}
                    margin={'20px 10px '}
                    classContent={''}
                    textContent={'新しいパスワードを入力してパスワード変更を完了してください。'}
                    optionContent={''}
                />
                <div className=" pb-5">
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type="password"
                        label="新しいパスワード"
                        value={password}
                        margin="dense"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type="password"
                        label="新しいパスワード確認用"
                        value={passwordConfirmation}
                        margin="dense"
                        onChange={(event) => setPasswordConfirmation(event.target.value)}
                    />

                    <TextField type="hidden" value={resetPasswordToken} />
                    <ul className="text-xs my-2">
                        <p className="m-1">パスワード設定の条件</p>
                        <div className="flex flex-wrap">
                            <li className="w-40">・大文字1文字以上</li>
                            <li className="w-40">・小文字1文字以上</li>
                            <li className="w-40">・数字1文字以上</li>
                            <li className="w-40">・特殊文字1文字以上</li>
                        </div>

                        <li className="text-xs ml-2 mt-1">
                            ( 使用可能な特殊文字 #, ?, !, @, $, %, ^, &, *, - )
                        </li>
                    </ul>
                </div>

                <button
                    type="submit"
                    onClick={handlePasswordReset}
                    disabled={isButtonDisabled}
                    className={`w-full p-3 rounded my-5  ${
                        isButtonDisabled ? 'bg-gray-200 text-gray-400' : 'bg-blue-base text-white'
                    }`}
                >
                    パスワード変更
                </button>
            </form>
            <AlertMessage
                open={alertMessageOpen}
                setOpen={setAlertMessageOpen}
                severity="error"
                message="入力内容が不適切です。"
            />
            <AlertMessage
                open={alertConfirmMessageOpen}
                setOpen={setAlertConfirmMessageOpen}
                severity="success"
                message="パスワードの変更が完了しました。3秒後にログインページにリダイレクトします。"
            />
        </>
    );
};

export default ResetForm;
