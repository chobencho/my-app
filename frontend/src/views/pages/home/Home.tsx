// Common
import { useEffect, useState } from 'react';
// Function
import { getUsers } from 'lib/api/user';
import { getSortUsers } from 'lib/api/user';
// Interface
import { UserData } from 'interfaces/index';
// Components
import UsersItem from 'views/components/modules/home/UsersItem';
import SearchButton from 'views/components/modules/home/SearchButton';
import SortButton from 'views/components/modules/home/SortButton';
import { useAuthData } from 'views/components/modules/common/useAuthData';
import SkeletonLoaderHome from 'views/components/modules/home/SkeletonLoaderHome';

const Home = () => {
    // State
    const [users, setUsers] = useState<UserData[]>([]);
    const [sortValue, setSortValue] = useState<string>('sortLogin');
    // Id
    const { stringMyId } = useAuthData();
    const [isLoading, setIsLoading] = useState(true);
    const [showSkeleton, setShowSkeleton] = useState(true);

    // ユーザ情報を取得
    const handleFetchUsersData = async (tags: string[]) => {
        getUsers(stringMyId, tags).then((res) => setUsers(res.data));
    };

    // ユーザソート
    const handleSortUsersData = async (sortValue: string) => {
        getSortUsers(stringMyId, sortValue).then((res) => setUsers(res.data));
    };

    useEffect(() => {
        handleSortUsersData(sortValue);
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
            setShowSkeleton(false);
        }, 200);
        return () => clearTimeout(delay);
    }, []);

    return (
        <>
            {isLoading ? (
                <SkeletonLoaderHome />
            ) : (
                <div className="w-base m-auto my-2">
                    <div className="flex justify-between">
                        <SearchButton
                            handleFetchUsersData={handleFetchUsersData}
                            stringMyId={stringMyId ?? ''}
                        />
                        <SortButton handleSort={handleSortUsersData} />
                    </div>
                    <div className="w-full">
                        <div className="flex flex-wrap">
                            {users.map((user) => (
                                <UsersItem
                                    key={user.id}
                                    handleFetchUsersData={handleFetchUsersData}
                                    userData={user}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
