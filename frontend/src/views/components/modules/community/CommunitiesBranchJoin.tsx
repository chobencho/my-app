// Interface
import { CommunityData } from "interfaces/index";
// Components
import CommunitiesItem from "views/components/modules/community/CommunitiesItem";

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
