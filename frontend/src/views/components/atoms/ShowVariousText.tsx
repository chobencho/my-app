import React from 'react';

export interface ShowVariousTextProps {
    fontSize: string;
    margin: string;
    classContent: string;
    fontWeight: number;
    textContent: string;
    optionContent: string;
}

const ShowVariousText = ({
    fontSize,
    margin,
    classContent,
    fontWeight,
    textContent,
    optionContent,
}: ShowVariousTextProps) => {
    const txt: React.CSSProperties = {
        fontSize: fontSize,
        margin: margin,
        fontWeight: fontWeight,
    };
    return (
        <p style={txt} className={classContent}>
            {textContent}
            {optionContent}
        </p>
    );
};

export default ShowVariousText;
