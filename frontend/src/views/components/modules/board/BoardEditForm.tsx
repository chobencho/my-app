import { useForm } from "react-hook-form";
import { useState } from "react";
// Function
import { editBoardData } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
import { clearPreview } from "lib/api/helper";
import { makeStyles, Theme } from "@material-ui/core/styles";

import FormInputText from "views/components/block/FormInputText";
import FormTextarea from "views/components/block/FormTextarea";
import FormImage from "views/components/block/FormImage";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // 画像アップロード機能

  // プレビュー削除機能
  const handleClearPreview = () => {
    setPreview("");
    clearPreview();
  };

  const onSubmit = async (data: Record<string, any>) => {
    const formData = new FormData();
    formData.append("title", data.title);
    if (image) {
      formData.append("image", image);
    }
    formData.append("body", data.body);

    await editBoardData(id, formData).then(() => {
      handleGetBoardData();
      handleClearPreview();
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-96 m-auto">
        <FormInputText
          state={title}
          setState={setTitle}
          register={register}
          errors={errors}
          inputTitle={"タイトル"}
          column={"title"}
        />

        <FormImage
          setState={setImage}
          inputTitle={"サムネイル"}
          preview={preview}
          setPreview={setPreview}
          onClose={handleClearPreview}
        />

        <FormTextarea
          state={body}
          setState={setBody}
          register={register}
          errors={errors}
          inputTitle={"内容"}
          column={"body"}
        />

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
