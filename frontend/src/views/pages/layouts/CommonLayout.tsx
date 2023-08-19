// Common
import React, { useContext } from "react";
import { AuthContext } from "App";
// Components
import Header from "views/pages/layouts/Header";
import Footer from "views/pages/layouts/Footer";

interface CommonLayoutProps {
  children: React.ReactElement;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  // Auth
  const { isSignedIn, currentUser } = useContext(AuthContext);

  return (
    <>
      <header className="fixed w-full top-0 z-30">
        <Header />
      </header>
      <main className="pt-11 pb-20">{children}</main>
      {isSignedIn && currentUser ? (
        <>
          <footer className="fixed w-full bottom-0 z-30">
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
