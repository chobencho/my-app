// Common
import { Link } from 'react-router-dom';
// Interface
import { CommentData } from 'interfaces/index';
import ShowMoment from 'views/components/atoms/ShowMoment';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

interface CommentItemProps {
    comment: CommentData;
}

const CommentItem = ({ comment }: CommentItemProps) => {
    return (
        <>
            <div className="border-b w-base flex m-auto py-1">
                <Link to={`/user/${comment.userId}`} className="w-16 mr-2">
                    {comment.image?.url ? (
                        <img
                            src={comment.image.url.replace(
                                '/board_comment/image/',
                                `/user/image/${comment.userId}/`
                            )}
                            alt="comment image"
                            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full m-auto"
                        />
                    ) : (
                        <img
                            src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
                            alt="comment image"
                            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full m-auto"
                        />
                    )}
                </Link>
                <div className="w-4/5">
                    <ShowVariousText
                        fontSize={'14px'}
                        fontWeight={0}
                        margin={''}
                        classContent={''}
                        textContent={comment.name}
                        optionContent={''}
                    />
                    <ShowVariousText
                        fontSize={'12px'}
                        fontWeight={0}
                        margin={''}
                        classContent={'break-all whitespace-pre-wrap'}
                        textContent={comment.body}
                        optionContent={''}
                    />
                </div>

                <ShowMoment
                    fontSize={'10px'}
                    margin={'0 5px 0 0'}
                    classContent={'w-32 text-right'}
                    time={comment.createdAt}
                    format={'Mo月Do H:mm'}
                />
            </div>
        </>
    );
};

export default CommentItem;
