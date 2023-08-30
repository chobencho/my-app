import React from "react";

export interface PageTitleProps {
  title: string;
  padding: string;
  classes: string;
}

const PageTitle = ({ title, padding, classes }: PageTitleProps) => {
  const txt: React.CSSProperties = {
    padding: padding,
  };

  return (
    <div className={classes}>
      <p style={txt}>{title}</p>
    </div>
  );
};

export default PageTitle;
