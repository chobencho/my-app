import CommunitiesItem from "views/components/modules/community/CommunitiesItem";
import { CommunityData } from "interfaces/index";

type CommunityProps = {
  myCommunity: CommunityData[];
};

const CommunitiesBranchJoin = ({ myCommunity }: CommunityProps) => {
  return (
    <>
      {myCommunity.map((community) => (
        <CommunitiesItem community={community} key={community.id} />
      ))}
    </>
  );
};

export default CommunitiesBranchJoin;
