import { v4 as uuidv4 } from "uuid";

// 画像アップロード機能
export const uploadImage = (
  e: React.ChangeEvent<HTMLInputElement>,
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>
) => {
  const file = e.target.files?.[0];
  setImage(file);
};

// 画像アップロード機能(画像名ユニーク)
export const uploadUniqueImage = (
  e: React.ChangeEvent<HTMLInputElement>,
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>
) => {
  const file = e.target.files?.[0];
  if (file) {
    const uniqueFileName = uuidv4() + ".jpg";
    setImage(new File([file], uniqueFileName, { type: file.type }));
  }
};

// プレビュー機能
export const previewImage = (
  e: React.ChangeEvent<HTMLInputElement>,
  setPreview: React.Dispatch<React.SetStateAction<string>>
) => {
  const file = e.target.files?.[0];
  if (file) {
    setPreview(window.URL.createObjectURL(file));
  } else {
    setPreview("");
  }
};

// プレビュー削除機能
export const clearPreview = (
  setPreview: React.Dispatch<React.SetStateAction<string>>
) => {
  const fileInput = document.getElementById(
    "icon-button-file"
  ) as HTMLInputElement;
  if (fileInput) {
    fileInput.value = "";
  }
  setPreview("");
};

// モーダル表示
export const openModal = (
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setShowModal(true); // モーダルを非表示にする
};

// モーダル非表示
export const clearModal = (
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setShowModal(false); // モーダルを非表示にする
};

// 画像拡大機能
export const expansionImage = (
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setShowModal(true); // モーダルを非表示にする
};
