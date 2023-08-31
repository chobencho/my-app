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
    <div className="">
      <header className=" bg-white fixed top-0 h-12  flex items-center z-30">
        <Header />
      </header>
      <main className="pt-12 pb-20">{children}</main>
      {isSignedIn && currentUser ? (
        <>
          <footer className="fixed bottom-0">
            <Footer />
          </footer>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CommonLayout;
