import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "App";

import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MessageIcon from "@mui/icons-material/Message";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupsIcon from "@mui/icons-material/Groups";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#516AC5",
    },
    secondary: {
      main: "#679D5F",
    },
  },
});

const Footer = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div>
        <div color="inherit" className="border-y bg-white">
          <div className="my-1 mx-2 flex justify-evenly">
            <Link to="/" className="footer-transition-button">
              <PersonSearchIcon fontSize="large" className="footer-icon" />
              <p className="footer-text">ユーザ検索</p>
            </Link>
            <Link to="/boards" className="footer-transition-button">
              <AssignmentIcon fontSize="large" className="footer-icon" />
              <p className="footer-text">掲示板</p>
            </Link>
            <Link to="/communities" className="footer-transition-button">
              <GroupsIcon fontSize="large" className="footer-icon" />
              <p className="footer-text">コミュニティ</p>
            </Link>
            <Link to="/messages" className="footer-transition-button">
              <MessageIcon fontSize="large" className="footer-icon" />
              <p className="footer-text">チャット</p>
            </Link>
            <Link
              to={`/myPage/${currentUser?.id}`}
              className="footer-transition-button"
            >
              <AccountBoxIcon fontSize="large" className="footer-icon" />
              <p className="footer-text">マイページ</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
