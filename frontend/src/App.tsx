import React, { useState, useEffect, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import CommonLayout from "views/pages/layouts/CommonLayout";
import Home from "views/pages/home/Home";
import SignUp from "views/pages/auth/SignUp";
import SignIn from "views/pages/auth/SignIn";
import ResetPassword from "views/pages/auth/PasswordResetForm";
import Board from "views/pages/board/Board";
import Boards from "views/pages/board/Boards";
import BoardCreate from "views/pages/board/BoardCreate";
import BoardEdit from "views/pages/board/BoardEdit";
import Communities from "views/pages/community/Communities";
import Community from "views/pages/community/Community";
import Messages from "views/pages/message/Messages";
import Message from "views/pages/message/Message";
import User from "views/pages/user/User";
import MyPage from "views/pages/mypage/MyPage";
import MyFav from "views/pages/mypage/MyFav";
import MyBoard from "views/pages/mypage/MyBoard";
import Setting from "views/pages/mypage/Setting";
import DeleteAccount from "views/pages/mypage/DeleteAccount";
import Information from "views/pages/mypage/Information";
import Error from "views/pages/layouts/Error";

import { getCurrentUser } from "lib/api/auth";
import { checkAge } from "lib/api/common";
import { UserData } from "interfaces/index";

import Verification from "views/pages/mypage/Verification";
import UserEdit from "views/pages/user/UserEdit";

import { updateLastLogin } from "lib/api/auth";

export const AuthContext = createContext(
  {} as {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: UserData | undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserData | undefined>>;
    verifiedAge: boolean;
  }
);

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserData | undefined>();
  const [verifiedAge, setVerifiedAge] = useState<boolean>(false);

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);

        console.log(res?.data.data);
      } else {
        console.log("No current user");
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleCheckAge = () => {
    if (currentUser !== undefined) {
      const stringMyId = currentUser.id.toString();
      checkAge(stringMyId).then((res) => setVerifiedAge(res.data));
    }
  };

  const handleUpdateLastLogin = () => {
    if (currentUser !== undefined) {
      const stringMyId = currentUser.id.toString();
      updateLastLogin(stringMyId);
    }
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser]);

  useEffect(() => {
    handleCheckAge();
  }, [currentUser]);

  useEffect(() => {
    handleUpdateLastLogin();
  }, [currentUser]);

  const Private = ({ children }: { children: React.ReactElement }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Navigate to="/signin" />;
      }
    } else {
      return <></>;
    }
  };

  return (
    <Router>
      <AuthContext.Provider
        value={{
          loading,
          setLoading,
          isSignedIn,
          setIsSignedIn,
          currentUser,
          setCurrentUser,
          verifiedAge,
        }}
      >
        <CommonLayout>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/error" element={<Error />} />
            <Route
              path="/"
              element={
                <Private>
                  <Home />
                </Private>
              }
            />
            <Route
              path="/boards"
              element={
                <Private>
                  <Boards />
                </Private>
              }
            />
            <Route
              path="/board/:id"
              element={
                <Private>
                  <Board />
                </Private>
              }
            />
            <Route
              path="/boardCreate"
              element={
                <Private>
                  <BoardCreate />
                </Private>
              }
            />
            <Route
              path="/board/:id/edit"
              element={
                <Private>
                  <BoardEdit />
                </Private>
              }
            />
            <Route
              path="/communities"
              element={
                <Private>
                  <Communities />
                </Private>
              }
            />
            <Route
              path="/community/:id"
              element={
                <Private>
                  <Community />
                </Private>
              }
            />

            <Route
              path="/messages"
              element={
                <Private>
                  <Messages />
                </Private>
              }
            />
            <Route
              path="/message/:id"
              element={
                <Private>
                  <Message />
                </Private>
              }
            />
            <Route
              path="/user/:id"
              element={
                <Private>
                  <User />
                </Private>
              }
            />
            <Route
              path="/user/:id/edit"
              element={
                <Private>
                  <UserEdit />
                </Private>
              }
            />
            <Route
              path="/mypage/:id"
              element={
                <Private>
                  <MyPage />
                </Private>
              }
            />
            <Route
              path="/setting"
              element={
                <Private>
                  <Setting />
                </Private>
              }
            />
            <Route
              path="/deleteAccount"
              element={
                <Private>
                  <DeleteAccount />
                </Private>
              }
            />
            <Route
              path="/verification"
              element={
                <Private>
                  <Verification />
                </Private>
              }
            />
          </Routes>
        </CommonLayout>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
