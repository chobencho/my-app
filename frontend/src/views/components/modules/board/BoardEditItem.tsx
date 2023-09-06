// Interface
import { BoardData } from 'interfaces/index';

import { makeStyles, Theme } from '@material-ui/core/styles';

import ShowVariousImage from 'views/components/atoms/ShowVariousImage';
import ShowVariousOtherImage from 'views/components/atoms/ShowVariousOtherImage';
import ShowMoment from 'views/components/atoms/ShowMoment';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

interface BoardEditItemProps {
    boardData: BoardData;
}

const useStyles = makeStyles((theme: Theme) => ({
    boardImage: {
        width: '100%',
        height: '220px',
        objectFit: 'cover',
    },
    userImage: {
        width: '30px',
        height: '30px',
        objectFit: 'cover',
        borderRadius: '20px',
    },
}));

const BoardEditItem = ({ boardData }: BoardEditItemProps) => {
    const classes = useStyles();

    return (
        <>
            <ShowVariousImage
                generalData={boardData}
                alt={'boardData image'}
                classContent={'object-cover'}
                imageWidth={'100%'}
                imageHeight={'auto'}
                maxImageHeight={'40vh'}
                rounded={''}
                margin={''}
            />
            <div className="w-base m-auto">
                <ShowVariousText
                    fontSize={'20px'}
                    fontWeight={0}
                    margin={'8px 0'}
                    classContent={''}
                    textContent={boardData.title}
                    optionContent={''}
                />
                <div className="flex justify-between">
                    <div className="flex my-auto">
                        <ShowVariousOtherImage
                            generalData={boardData}
                            alt={'board image'}
                            classContent={'object-cover'}
                            imageWidth={'40px'}
                            imageHeight={'40px'}
                            maxImageHeight={''}
                            rounded={'100%'}
                            margin={''}
                        />
                        <div>
                            <ShowVariousText
                                fontSize={'14px'}
                                fontWeight={0}
                                margin={'0 0 0 5px'}
                                classContent={''}
                                textContent={boardData.name}
                                optionContent={''}
                            />
                            <ShowMoment
                                fontSize={'12px'}
                                margin={'0 0 0 5px'}
                                classContent={''}
                                time={boardData.createdAt}
                                format={'YYYY年MM月DD日 HH:mm'}
                            />
                        </div>
                    </div>
                </div>

                <ShowVariousText
                    fontSize={'14px'}
                    fontWeight={0}
                    margin={'20px 0'}
                    classContent={'whitespace-pre-wrap'}
                    textContent={boardData.boardBody}
                    optionContent={''}
                />
            </div>
        </>
    );
};

export default BoardEditItem;
