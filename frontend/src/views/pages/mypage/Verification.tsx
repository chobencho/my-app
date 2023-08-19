import React, { useState, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// Function
import { sendCertificateImage } from "lib/api/verification";
import { getEditUserData } from "lib/api/user";
import { clearPreview } from "lib/api/helper";
import { previewImage } from "lib/api/helper";
import { uploadUniqeImage } from "lib/api/helper";
// Interface
import { UserData } from "interfaces/index";
// Components
// import GoBackButton from "views/components/modules/common/GoBackButton";
import { useAuthData } from "views/components/modules/common/useAuthData";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Verification = () => {
  // State
  const [userData, setUserData] = useState<UserData | null>(null);
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");
  // Id
  const { stringMyId, myEmail } = useAuthData();

  // 画像アップロード機能
  const handleUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => uploadUniqeImage(e, setImage),
    [setImage]
  );

  // プレビュー機能
  const handlePreviewImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => previewImage(e, setPreview),
    [setPreview]
  );

  // プレビュークリア機能
  const handleClearPreview = () => {
    setPreview("");
    clearPreview();
  };

  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("user_id", stringMyId ? stringMyId : "");
    if (image) formData.append("image", image);

    return formData;
  };

  const handleSendCertificateImage = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const data = createFormData();

    if (stringMyId !== undefined) {
      await sendCertificateImage(stringMyId, myEmail, data).then(() => {
        setPreview("");
        setImage(undefined);
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSendCertificateImage} className="w-96 m-auto">
        <p className="text-center p-5">年齢・学生証認証</p>
        <p className="text-center text-sm">
          大学、研究機関及び高等教育機関発行の
          <br />
          学生証を使って１８歳以上である確認をします。
        </p>
        <img src={`${process.env.PUBLIC_URL}/images/common/card.jpg`} alt="" />
        <p className="text-xs text-center">
          認証がお済みでない方は、一部の機能をご利用いただけません。
        </p>
        <p className="text-xs text-center py-5">
          ※学生証提出の際の注意点※
          <br />
          提出された画像ファイルが以下の項目に全て
          <br />
          該当する場合のみ、年齢確認証として許可されます。
        </p>
        <table className="text-xs mx-5 mb-5">
          <tr>
            <td className="flex items-start">1.</td>
            <td className="pb-2">
              学生証の全体が映っており、生年月日、氏名、所属機関
              (専攻、コース)が鮮明に読み取れる。(顔写真。学籍番号
              はマスキングしていただいて構いません。)
            </td>
          </tr>
          <tr>
            <td className="flex items-start">2.</td>
            <td className="pb-2">
              画像データを送信した会員様ご本人の学生証である。
            </td>
          </tr>
          <tr>
            <td className="flex items-start">3.</td>
            <td className="pb-2">
              現在、大学、研究機関及び高等教育機関の学生である。
            </td>
          </tr>
          <tr>
            <td className="flex items-start">4.</td>
            <td className="pb-2">現在の年齢が18歳以上である。</td>
          </tr>
        </table>
        <div className="input-part">
          <input
            id="icon-button-file"
            type="file"
            className="hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleUploadImage(e);
              handlePreviewImage(e);
            }}
          />
          <div className="relative">
            <label className="image-label" htmlFor="icon-button-file">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 mb-1 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-1 text-sm text-gray-400">
                  <span className="font-semibold">
                    写真のアップロードはここをクリック
                  </span>
                </p>
                <p className="text-xs text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            </label>
            {preview ? (
              <div className="absolute top-0 left-0">
                <HighlightOffIcon
                  onClick={() => handleClearPreview()}
                  className="absolute text-white top-1 left-1"
                />
                <img
                  src={preview}
                  alt="preview img"
                  className="preview-image"
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="generalButton w-3/5 bg-blue-base text-white"
          >
            送信する
          </button>
        </div>
      </form>
    </>
  );
};

export default Verification;
