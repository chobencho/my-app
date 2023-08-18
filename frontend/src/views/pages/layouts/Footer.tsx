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
            <Link to="/" className={`${classes.transitionButton}`}>
              <PersonSearchIcon fontSize="large" className={classes.icon} />
              <Typography className={`${classes.text}`}>ユーザ検索</Typography>
            </Link>
            <Link to="/boards" className={`${classes.transitionButton}`}>
              <AssignmentIcon fontSize="large" className={classes.icon} />
              <Typography className={`${classes.text}`}>掲示板</Typography>
            </Link>
            <Link to="/communities" className={`${classes.transitionButton}`}>
              <GroupsIcon fontSize="large" className={classes.icon} />
              <Typography className={`${classes.text}`}>
                コミュニティ
              </Typography>
            </Link>
            <Link to="/messages" className={`${classes.transitionButton}`}>
              <MessageIcon fontSize="large" className={classes.icon} />
              <Typography className={`${classes.text}`}>チャット</Typography>
            </Link>
            <Link
              to={`/myPage/${currentUser?.id}`}
              className={`${classes.transitionButton}`}
            >
              <AccountBoxIcon fontSize="large" className={classes.icon} />
              <Typography className={`${classes.text}`}>マイページ</Typography>
            </Link>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Footer;
