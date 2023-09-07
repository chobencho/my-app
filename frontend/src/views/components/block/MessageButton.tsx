import React from 'react';

export interface MessageButtonProps {
    buttonTitle: string;
    trim: string;
}

const MessageButton = ({ buttonTitle, trim }: MessageButtonProps) => {
    return (
        <button
            type="submit"
            disabled={!trim.trim()}
            className={`w-12 text-white rounded mx-1 text-sm ${
                !trim.trim() ? 'bg-gray-300' : 'bg-blue-base'
            }`}
        >
            {buttonTitle}
        </button>
    );
};

export default MessageButton;
