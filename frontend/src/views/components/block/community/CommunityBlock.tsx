// Common
import React from 'react';
// Interface
import { CommunityData } from 'interfaces/index';
// Components
import CommunitiesItem from 'views/components/block/community/CommunitiesItem';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

export interface CommunityBlockProps {
    title: string;
    padding: string;
    margin: string;
    classes: string;
    generalData: CommunityData[];
}

const CommunityBlock = ({ title, padding, margin, classes, generalData }: CommunityBlockProps) => {
    const styleTop: React.CSSProperties = {
        padding: margin,
    };
    return (
        <div style={styleTop}>
            <ShowVariousText
                fontSize={'16px'}
                fontWeight={0}
                margin={'10px'}
                classContent={'text-center'}
                textContent={title}
                optionContent={''}
            />

            {generalData.map((data) => (
                <CommunitiesItem community={data} key={data.id} />
            ))}
        </div>
    );
};

export default CommunityBlock;
