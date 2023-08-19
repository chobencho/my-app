import React, { useState, useCallback } from "react";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Function
import { createCommunityComment } from "lib/api/communityChat";
import { createMessage } from "lib/api/chat";
import { createComment } from "lib/api/boardComment";
import { clearPreview } from "lib/api/helper";
import { uploadImage } from "lib/api/helper";
import { previewImage } from "lib/api/helper";
// Components
import ModalCommonMessageForm from "views/components/modules/common/ModalCommonMessageForm";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import { useAuthData } from "views/components/modules/common/useAuthData";

export interface CommonMessageFormProps {
  handleGetData: Function;
  id: string;
  stringMyId: string;
  discrimination: string;
}

const useStyles = makeStyles((theme) => ({
  form: {},
}));

const CommonMessageForms = ({
  handleGetData,
  id,
  stringMyId,
  discrimination,
}: CommonMessageFormProps) => {
  const classes = useStyles();
  const [body, setBody] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");

  const { verifiedAge } = useAuthData();

  // 画像アップロード機能
  const handleUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => uploadImage(e, setImage),
    [setImage]
  );

  // プレビュー機能
  const handlePreviewImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => previewImage(e, setPreview),
    [setPreview]
  );

  // プレビュー削除機能
  const handleClearPreview = () => {
    setPreview("");
    clearPreview();
  };

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

    if (discrimination == "community") {
      const data = createFormData("community_id");

      await createCommunityComment(data).then(() => {
        setBody("");
        handleGetData();
      });
    } else if (discrimination == "chat") {
      const data = createFormData("room_id");

      await createMessage(data).then(() => {
        setBody("");
        handleGetData();
      });
    } else if (discrimination == "board") {
      const data = createFormData("board_id");

      await createComment(data).then(() => {
        setBody("");
        handleGetData();
      });
    }
  };

  return (
    <>
      <form onSubmit={handleCreateCommonMessageForm} className="bg-white p-2">
        <div className="">
          <div className="">
            <div className="flex">
              {discrimination !== "board" && (
                <div>
                  <input
                    id="icon-button-file"
                    type="file"
                    className="hidden"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleUploadImage(e);
                      handlePreviewImage(e);
                    }}
                  />
                  <label className="" htmlFor="icon-button-file">
                    <PhotoCameraBackIcon className="text-sm" />
                  </label>
                </div>
              )}

              <textarea
                placeholder="コメント"
                // className→whitespace-pre-wrapで改行している
                className="border h-8 py-1 px-2 w-full rounded text-sm"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              ></textarea>

              <button
                type="submit"
                disabled={!body || body.length < 0}
                className="w-12 bg-blue-base text-white rounded mx-1 text-sm"
              >
                送信
              </button>
            </div>
          </div>
          {/* {!verifiedAge && (
            <span
              className=""
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              年齢確認が完了していません
            </span>
          )} */}
        </div>
      </form>
      {/* メッセージ入力モーダル */}
      {preview ? (
        <ModalCommonMessageForm
          preview={preview}
          onClose={handleClearPreview}
          generalId={id ?? ""}
          stringMyId={stringMyId ?? ""}
          image={image}
          handleGetData={handleGetData}
          discrimination={discrimination}
        />
      ) : null}
    </>
  );
};

export default CommonMessageForms;
