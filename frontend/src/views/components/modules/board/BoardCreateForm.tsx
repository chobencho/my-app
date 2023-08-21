import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Function
import { createBoardData } from "lib/api/board";
import { useAuthData } from "views/components/modules/common/useAuthData";
import { clearPreview } from "lib/api/helper";

import FormInputText from "views/components/block/FormInputText";
import FormTextarea from "views/components/block/FormTextarea";
import FormImage from "views/components/block/FormImage";
import FormSubmitButton from "views/components/block/FormSubmitButton";

const BoardCreateForm = () => {
  const navigate = useNavigate();
  // State
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");
  // Id
  const { stringMyId } = useAuthData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // プレビュー削除機能
  const handleClearPreview = () => {
    setPreview("");
    clearPreview();
  };

  const onSubmit = async (data: Record<string, any>) => {
    const formData = new FormData();
    formData.append("user_id", stringMyId || "");
    formData.append("title", data.title);
    if (image) {
      formData.append("image", image);
    }
    formData.append("body", data.body);

    await createBoardData(formData).then(() => {
      navigate("/boards");
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

        <FormSubmitButton buttonTitle={"掲示板を作成する"} />
      </form>
    </>
  );
};

export default BoardCreateForm;
