import React from 'react';
import ShowRequired from 'views/components/atoms/ShowRequired';

export interface FormInputTextProps {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    inputTitle: string;
    column: string;
    type: string;
}

const FormInputText = ({ state, setState, inputTitle, type }: FormInputTextProps) => {
    return (
        <div className="my-3">
            <div className="flex items-center my-1">
                <b className="input-title">{inputTitle}</b>
                <ShowRequired />
            </div>
            <div className="relative">
                <input
                    type={type}
                    placeholder={inputTitle}
                    value={state}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setState(e.target.value);
                    }}
                    id="hs-validation-name-error"
                    name="hs-validation-name-error"
                    className={`border py-3 pl-4 pr-14 block w-full border-gray-300 rounded-md text-sm focus:border-red-500 focus:ring-red-500`}
                    required
                    aria-describedby="hs-validation-name-error-helper"
                />
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none pr-3">
                    {state ? (
                        <svg
                            className="h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                    ) : (
                        <svg
                            className={`h-5 w-5 text-red-500`}
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormInputText;
