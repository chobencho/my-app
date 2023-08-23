// Common
import React, { useState } from "react";
// Function
import { createCommunityComment } from "lib/api/communityChat";
import { createMessage } from "lib/api/chat";
import { createComment } from "lib/api/boardComment";
import { uploadImage } from "lib/api/helper";
import { previewImage } from "lib/api/helper";
// Components
import ModalCommonMessageForm from "views/components/modules/common/ModalCommonMessageForm";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import { useAuthData } from "views/components/modules/common/useAuthData";
import MessageButton from "views/components/block/MessageButton";
import FormTextarea from "views/components/block/FormTextarea";

export interface CommonMessageFormProps {
  handleGetData: Function;
  id: string;
  stringMyId: string;
  another_id: string;
  discrimination: string;
}

const CommonMessageForms = ({
  handleGetData,
  id,
  stringMyId,
  another_id,
  discrimination,
}: CommonMessageFormProps) => {
  const [body, setBody] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");

  const { verifiedAge } = useAuthData();

  // 送信用フォームデータ作成関数
  const createFormData = (general_id: string): FormData => {
    const formData = new FormData();

    formData.append(general_id, id ? id : "");
    formData.append("user_id", stringMyId ? stringMyId : "");
    formData.append("body", body);

    return formData;
  };

  const handleCreateCommonMessageForm = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const data = createFormData(another_id);

    if (discrimination == "community") {
      await createCommunityComment(data).then(() => {});
    } else if (discrimination == "chat") {
      await createMessage(data).then(() => {});
    } else if (discrimination == "board") {
      await createComment(data).then(() => {});
    }
    setBody("");
    handleGetData();
  };

  return (
    <>
      <form onSubmit={handleCreateCommonMessageForm} className="bg-white p-2">
        <div className="flex">
          {discrimination !== "board" && (
            <div>
              <input
                id="icon-button-file"
                type="file"
                className="hidden"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  uploadImage(e, setImage);
                  previewImage(e, setPreview);
                }}
              />
              <label className="" htmlFor="icon-button-file">
                <PhotoCameraBackIcon className="text-sm" />
              </label>
            </div>
          )}

          <textarea
            placeholder="コメント"
            className="border h-8 py-1 px-2 w-full rounded text-sm"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>

          <MessageButton buttonTitle={"送信"} trim={body} />
        </div>
      </form>
      {!verifiedAge && discrimination !== "board" && (
        <span
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          年齢確認が完了していません
        </span>
      )}
      {/* メッセージ入力モーダル */}
      {preview ? (
        <ModalCommonMessageForm
          preview={preview}
          setPreview={setPreview}
          generalId={id ?? ""}
          stringMyId={stringMyId ?? ""}
          image={image}
          handleGetData={handleGetData}
          another_id={another_id}
          discrimination={discrimination}
        />
      ) : null}
    </>
  );
};

export default CommonMessageForms;
