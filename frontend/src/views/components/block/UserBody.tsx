import React from "react";

export interface UserBodyProps {
  body: string;
  margin: string;
  fontSize: string;
  classes: string;
}

const UserBody = ({ body, margin, fontSize, classes }: UserBodyProps) => {
  const styleBody: React.CSSProperties = {
    fontSize: fontSize,
    margin: margin,
  };
  return (
    <p style={styleBody} className={classes}>
      {body}
    </p>
  );
};

export default;
