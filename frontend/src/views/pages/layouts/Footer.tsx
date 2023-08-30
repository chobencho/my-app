import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "App";

import { makeStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MessageIcon from "@mui/icons-material/Message";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupsIcon from "@mui/icons-material/Groups";
import Typography from "@material-ui/core/Typography";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@material-ui/styles";

import Box from "@material-ui/core/Box";

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

const useStyles = makeStyles((theme) => ({
  linkBtn: {
    textTransform: "none",
  },
  icon: {
    margin: "auto",
  },
  text: {
    fontSize: "8pt",
  },
  transitionButton: {
    width: "20%",
    textAlign: "center",
    fontSize: "20px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};

export default Footer;
