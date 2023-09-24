import React from 'react';
import Select from 'react-select';
import Gender from 'options/gender';

export interface FormSelectProps {
    value: any;
    onChange: (selectedOption: any) => void;
    inputTitle: string;
    options: { value: string; label: string }[];
}

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        backgroundColor: '#fff',
        borderRadius: '6px',
        height: '44px',
    }),
    indicatorSeparator: (provided: any) => ({}),
};

const FormSelect = ({ value, onChange, inputTitle, options }: FormSelectProps) => {
    return (
        <div className="my-3">
            <div className="flex items-center">
                <b className="input-title">{inputTitle}</b>
            </div>

            <div className="relative">
                <Select
                    styles={customStyles}
                    value={value}
                    onChange={onChange}
                    options={options}
                    className="py-1 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500"
                />
            </div>
        </div>
    );
};

export default FormSelect;
