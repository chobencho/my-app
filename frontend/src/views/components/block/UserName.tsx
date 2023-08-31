<<<<<<< HEAD
import React from "react";

export interface UserNameProps {
  name: string;
  pcFontSize: string;
  spFontSize: string;
  fontWeight: number;
  margin: string;
  option: string;
}

const UserName = ({
  name,
  pcFontSize,
  spFontSize,
  fontWeight,
  margin,
  option,
}: UserNameProps) => {
  const screenWidth = window.innerWidth;
  const fontSize = screenWidth < 540 ? spFontSize : pcFontSize;

  const txt: React.CSSProperties = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    margin: margin,
  };
  return (
    <p style={txt}>
      {name}
      {option}
    </p>
  );
};

export default UserName;
=======
import React from "react";

export interface UserNameProps {
  name: string;
  pcFontSize: string;
  spFontSize: string;
  fontWeight: number;
  margin: string;
  option: string;
}

const UserName = ({
  name,
  pcFontSize,
  spFontSize,
  fontWeight,
  margin,
  option,
}: UserNameProps) => {
  const screenWidth = window.innerWidth;
  const fontSize = screenWidth < 540 ? spFontSize : pcFontSize;

  const txt: React.CSSProperties = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    margin: margin,
  };
  return (
    <p style={txt}>
      {name}
      {option}
    </p>
  );
};

export default UserName;
>>>>>>> bce83383af6e537856b901e80365bf1306d39657
