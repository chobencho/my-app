import React, { useState, useCallback } from "react";
// Function
import { editBoardData } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
import { clearPreview } from "lib/api/helper";
import { uploadImage } from "lib/api/helper";
import { previewImage } from "lib/api/helper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface BoardEditFormProps {
  id: string;
  boardData: BoardData;
  handleGetBoardData: Function;
}

const useStyles = makeStyles((theme: Theme) => ({}));

const BoardEditForm = ({
  id,
  boardData,
  handleGetBoardData,
}: BoardEditFormProps) => {
  // State
  const [title, setTitle] = useState<string>(boardData.title || "");
  const [body, setBody] = useState<string>(boardData.body || "");
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");
  const classes = useStyles();

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

  // FormData形式でデータを作成
  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("title", title);
    if (image) formData.append("image", image);
    formData.append("body", body);

    return formData;
  };

  // ユーザ情報を変更する
  const handleEditBoardData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = createFormData();

    await editBoardData(id, data).then(() => {
      handleGetBoardData();
      handleClearPreview();
    });
  };

  return (
    <>
      <form onSubmit={handleEditBoardData} className="w-96 m-auto">
        <div className="input-part">
          <div className="flex items-center">
            <b className="input-title">タイトル</b>
            <p className="required">必須</p>
          </div>
          <input
            type="text"
            placeholder="タイトル"
            className="input-text"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="input-part">
          <b className="input-title">サムネイル</b>
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

        <div className="input-part">
          <div className="flex items-center">
            <b className="input-title">内容</b>
            <p className="required">必須</p>
          </div>
          <textarea
            placeholder="body"
            className="input-text whitespace-pre-wrap h-40"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="w-full text-center">
          <button
            type="submit"
            className="generalButton bg-blue-base text-white"
          >
            変更を保存する
          </button>
        </div>
      </form>
    </>
  );
};

export default BoardEditForm;
