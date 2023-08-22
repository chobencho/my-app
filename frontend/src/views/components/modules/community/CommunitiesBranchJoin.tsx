import CommunitiesItem from "views/components/modules/community/CommunitiesItem";
import { CommunityData } from "interfaces/index";

type CommunityProps = {
  myCommunityData: CommunityData[];
};

const CommunitiesBranchJoin = ({ myCommunityData }: CommunityProps) => {
  return (
    <>
      {myCommunityData.map((community) => (
        <CommunitiesItem community={community} key={community.id} />
      ))}
    </>
  );
};

export default CommunitiesBranchJoin;
