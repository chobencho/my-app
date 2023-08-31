import React, { useState, useCallback } from "react";
// Function
import { sendCertificateImage } from "lib/api/verification";
// Components
import { useAuthData } from "views/components/modules/common/useAuthData";
import FormImage from "views/components/block/FormImage";

const Verification = () => {
  // State
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");
  // Id
  const { stringMyId, myEmail } = useAuthData();

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
      <form onSubmit={handleSendCertificateImage} className="w-base m-auto">
        <p className="text-center p-5">年齢・学生証認証</p>
        <p className="text-center text-sm">
          大学、研究機関及び高等教育機関発行の
          <br />
          学生証を使って１８歳以上である確認をします。
        </p>
        <img src={`${process.env.PUBLIC_URL}/images/common/card.webp`} alt="" />
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

        <FormImage
          setState={setImage}
          inputTitle={""}
          preview={preview}
          setPreview={setPreview}
        />

        <div className="text-center">
          <button
            type="submit"
            disabled={!preview}
            className={`generalButton w-1/2 text-white ${preview ? "bg-blue-base" : "bg-gray-200"
              }`}
          >
            送信する
          </button>
        </div>
      </form>
    </>
  );
};

export default Verification;
