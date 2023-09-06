import { useEffect, useState } from 'react';
// Function
import { fetchUserData } from 'lib/api/user';
import { fetchCommonRoomId } from 'lib/api/common';
// Interface
import { UserDataResponse } from 'interfaces/index';
// Components
import UserItem from 'views/components/modules/user/UserItem';
import PageSwitcherButton from 'views/components/atoms/PageSwitcherButton';
import { useAuthData } from 'views/components/modules/common/useAuthData';
import SkeletonLoaderUser from 'views/components/modules/user/SkeletonLoaderUser';

const User = () => {
    // State
    const [user, setUser] = useState<UserDataResponse | null>(null);
    const [commonRoomId, setCommonRoomId] = useState<string | null>(null);
    // Id
    const { stringMyId, verifiedAge, id } = useAuthData();

    const [isLoading, setIsLoading] = useState(true);
    const [showSkeleton, setShowSkeleton] = useState(true);

    const handleFetchUserData = async () => {
        try {
            const res = await fetchUserData(id);
            setUser(res.data);
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    };

    const handleFetchCommonRoom = async () => {
        try {
            const res = await fetchCommonRoomId(id, stringMyId);
            setCommonRoomId(res.data);
        } catch (error) {
            console.error('Failed to fetch common room id:', error);
        }
    };

    const userData = user?.userData;
    const hobbyData = user?.hobbyData || [];
    const interestData = user?.interestData || [];
    const tagsData = user?.tagsData || [];

    useEffect(() => {
        handleFetchUserData();
        handleFetchCommonRoom();
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
            setShowSkeleton(false);
        }, 500);

        return () => clearTimeout(delay);
    }, []);

    return (
        <>
            {isLoading ? (
                <SkeletonLoaderUser />
            ) : (
                <div className="pb-16">
                    {userData && (
                        <UserItem
                            myId={stringMyId}
                            userId={id}
                            handleFetchUserData={handleFetchUserData}
                            userData={userData}
                            hobbyData={hobbyData}
                            interestData={interestData}
                            tagsData={tagsData}
                        />
                    )}
                    {userData && (
                        <>
                            <PageSwitcherButton
                                userId={id || ''}
                                myId={stringMyId || ''}
                                generalId={id || ''}
                                verifiedAge={verifiedAge}
                                commonRoomId={commonRoomId || ''}
                                discrimination={'user'}
                            />
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default User;
