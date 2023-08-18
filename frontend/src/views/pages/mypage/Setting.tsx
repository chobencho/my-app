import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { signOut } from "lib/api/auth";
import { AuthContext } from "App";
import { clearModal } from "lib/api/helper";
import ModalTerms from "views/components/modules/terms/ModalTerms";
import ModalPrivacyPolicy from "views/components/modules/policy/ModalPrivacyPolicy";
import ModalDeleteAccount from "views/components/modules/user/ModalDeleteAccount";

const Setting = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleShowTermsModal = () => {
    setShowTermsModal(true);
  };

  const handleShowPplicyModal = () => {
    setShowPolicyModal(true);
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    clearModal(setShowTermsModal);
    clearModal(setShowPolicyModal);
    clearModal(setShowDeleteModal);
  };

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signOut();
      console.log(res);

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);
        navigate("/signin");

        console.log("Succeeded in sign out");
      } else {
        console.log("Failed in sign out");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="border mt-5">
        <Link
          to="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full border text-sm px-3 py-2"
        >
          <span>お問い合わせ</span>
        </Link>
        <br />
        <Link
          to={`/resetpassword`}
          className="inline-block w-full border text-sm px-3 py-2"
        >
          <span>パスワード変更</span>
        </Link>
        <br />
        <button
          onClick={handleShowTermsModal}
          className="inline-block w-full border text-sm px-3 py-2 text-left"
        >
          <span>利用規約</span>
        </button>
        <br />
        <button
          onClick={handleShowPplicyModal}
          className="inline-block w-full border text-sm px-3 py-2 text-left"
        >
          <span>プライバシーポリシー</span>
        </button>
        <br />
        <button
          onClick={handleSignOut}
          className="inline-block w-full border text-sm px-3 py-2 text-left"
        >
          <span>ログアウト</span>
        </button>
        <br />
        <button
          onClick={handleShowDeleteModal}
          className="inline-block w-full border text-sm px-3 py-2 text-left"
        >
          <span>アカウント削除</span>
        </button>
        <br />
      </div>
      {showTermsModal ? <ModalTerms onClose={handleCloseModal} /> : null}
      {showPolicyModal ? (
        <ModalPrivacyPolicy onClose={handleCloseModal} />
      ) : null}
      {showDeleteModal ? (
        <ModalDeleteAccount onClose={handleCloseModal} />
      ) : null}
    </>
  );
};

export default Setting;
