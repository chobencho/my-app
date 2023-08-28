import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

import { makeStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { signOut } from "lib/api/auth";

import { AuthContext } from "App";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "white",
  },
  linkBtn: {
    textTransform: "none",
    backgroundColor: "black",
    fontSize: "10px",
    color: "white",
  },
  imageContainer: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    elevation: 0,
  },
  image: {
    width: "70%",
    maxWidth: "100%",
    margin: "0 auto",
    textAlign: "center",
    height: "auto",
    elevation: 0,
  },
}));

const Header = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white w-full shadow">
        <div className="h-12 flex items-center">
          <Link to={"/"}>
            <img
              src={`${process.env.PUBLIC_URL}/images/header/logo.png`}
              alt="Description of the image"
              className="w-2/3 mx-auto"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
