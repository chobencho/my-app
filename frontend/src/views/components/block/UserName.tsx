import React from "react";

export interface UserNameProps {
  name: string;
  fontSize: string;
  fontWeight: number;
}

const UserName = ({ name, fontSize, fontWeight }: UserNameProps) => {
  const txt: React.CSSProperties = {
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
  return <p style={txt}>{name}</p>;
};

export default UserName;
