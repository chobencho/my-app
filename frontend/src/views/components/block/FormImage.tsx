import React, { useCallback } from "react";
import { uploadUniqueImage } from "lib/api/helper";
import { previewImage } from "lib/api/helper";
import { clearPreview } from "lib/api/helper";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
export interface FormImageProps {
  setState: React.Dispatch<React.SetStateAction<File | undefined>>;
  inputTitle: string;
  preview: string;
  setPreview: React.Dispatch<React.SetStateAction<string>>;
}

const FormImage = ({
  setState,
  inputTitle,
  preview,
  setPreview,
}: FormImageProps) => {
  const handleUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => uploadUniqueImage(e, setState),
    [setState]
  );

  // プレビュー機能
  const handlePreviewImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => previewImage(e, setPreview),
    [setPreview]
  );

  return (
    <div className="input-part">
      <b className="input-title">{inputTitle}</b>
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
              onClick={() => clearPreview(setPreview)}
              className="absolute text-white top-1 left-1"
            />
            <img src={preview} alt="preview img" className="preview-image" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FormImage;
