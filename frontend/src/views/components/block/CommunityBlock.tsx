// Common
import React from "react";
// Interface
import { CommunityData } from "interfaces/index";
// Components
import CommunitiesItem from "views/components/modules/community/CommunitiesItem";
import PageTitle from "views/components/block/PageTitle";

export interface CommunityBlockProps {
  title: string;
  padding: string;
  margin: string;
  classes: string;
  generalData: CommunityData[];
}

const CommunityBlock = ({
  title,
  padding,
  margin,
  classes,
  generalData,
}: CommunityBlockProps) => {
  const styleTop: React.CSSProperties = {
    padding: margin,
  };
  return (
    <div style={styleTop}>
      <PageTitle title={title} padding={padding} classes={classes} />

      {generalData.map((data) => (
        <CommunitiesItem community={data} key={data.id} />
      ))}
    </div>
  );
};

export default CommunityBlock;
