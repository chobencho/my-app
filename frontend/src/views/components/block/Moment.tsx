import React from "react";
import moment from "moment";

export interface MomentProps {
  time: Date;
  format: string;
  fontSize: string;
  margin: string;
  classes: string;
}

const Moment = ({ time, format, fontSize, margin, classes }: MomentProps) => {
  const styleMoment: React.CSSProperties = {
    fontSize: fontSize,
    margin: margin,
  };
  return (
    <p style={styleMoment} className={classes}>
      {moment(time).format(format)}
    </p>
  );
};

export default Moment;
