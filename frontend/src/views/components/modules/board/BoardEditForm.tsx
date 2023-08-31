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
import FormSubmitButton from "views/components/block/FormSubmitButton";

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

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    if (image) {
      formData.append("image", image);
    }
    formData.append("body", body);

    await editBoardData(id, formData).then(() => {
      handleGetBoardData();
      clearPreview(setPreview);
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
          type={"text"}
        />

        <FormImage
          setState={setImage}
          inputTitle={"サムネイル"}
          preview={preview}
          setPreview={setPreview}
        />

        <FormTextarea
          state={body}
          setState={setBody}
          register={register}
          errors={errors}
          inputTitle={"内容"}
          column={"body"}
        />

        <FormSubmitButton buttonTitle={"変更を保存する"} />
      </form>
    </>
  );
};

export default BoardEditForm;
