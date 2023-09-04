import React from 'react';
import { UserHobbyData } from 'interfaces/index';
import Hobby from 'options/hobby';

interface HobbyProps {
    hobbies: UserHobbyData[];
}

const HobbyComponent = ({ hobbies }: HobbyProps) => (
    <div className="flex flex-wrap">
        {hobbies.map((hobby) => {
            const hobbyOption = Hobby.HOB_OPTIONS.find(
                (option) => option[0] === parseInt(hobby.hobbyId)
            );
            if (hobbyOption) {
                const [, hobbyName, hobbyImage] = hobbyOption;
                return (
                    <div key={hobby.hobbyId} className="w-1/5 pr-1">
                        <div className="relative">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/hobby/${hobbyImage}`}
                                className="w-full h-auto rounded image-dark"
                            />
                            <span className="absolute inset-1/2 left-0 right-0 text-white text-sm text-center flex items-center justify-center">
                                {hobbyName}
                            </span>
                        </div>
                    </div>
                );
            }
            return null;
        })}
    </div>
);

export interface TableTrProps {
    trTitle: string;
    trData: string | UserHobbyData[];
}

const ColUserTableHobby = ({ trTitle, trData }: TableTrProps) => {
    const tdRightStyle: React.CSSProperties = {
        fontSize: '14px',
        whiteSpace: 'pre-wrap',
    };

    return (
        <tr>
            <td className="font-semibold pl-1 pr-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                {trTitle}
            </td>
            <td className="whitespace-pre-wrap py-4 text-sm text-gray-800 dark:text-gray-200">
                {Array.isArray(trData) ? (
                    trData.length > 0 && 'hobbyId' in trData[0] ? (
                        <>
                            <td style={tdRightStyle}></td>
                            <HobbyComponent hobbies={trData as UserHobbyData[]} />
                        </>
                    ) : (
                        <span>設定されていません</span>
                    )
                ) : (
                    <span>Invalid data</span>
                )}
            </td>
        </tr>
    );
};

export default ColUserTableHobby;
