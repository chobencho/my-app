import React from "react";

export interface UserNameProps {
  name: string;
  fontSize: string;
  fontWeight: number;
  margin: string;
}

const UserName = ({ name, fontSize, fontWeight, margin }: UserNameProps) => {
  const txt: React.CSSProperties = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    margin: margin,
  };
  return <p style={txt}>{name}</p>;
};

export default UserName;
