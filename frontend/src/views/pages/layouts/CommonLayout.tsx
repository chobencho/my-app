import React from "react";
import { useContext } from "react";
import { AuthContext } from "App";

import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "views/pages/layouts/Header";
import Footer from "views/pages/layouts/Footer";

const useStyles = makeStyles(() => ({
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 30,
  },
  container: {
    marginTop: "3.5rem",
    marginBottom: "5rem",
    padding: "0",
  },
}));

interface CommonLayoutProps {
  children: React.ReactElement;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  const classes = useStyles();
  const { isSignedIn, currentUser } = useContext(AuthContext);

  return (
    <>
      <header className="fixed w-full top-0 z-10">
        <Header />
      </header>
      <main className="pt-11 pb-20">
        <Container maxWidth="lg" className="">
          {children}
        </Container>
      </main>
      {isSignedIn && currentUser ? (
        <>
          <footer className="fixed w-full bottom-0 z-10">
            <Footer />
          </footer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommonLayout;
