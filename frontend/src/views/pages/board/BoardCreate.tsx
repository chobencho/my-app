// Common
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Function
import { createBoardData } from "lib/api/board";
import { useAuthData } from "views/components/modules/common/useAuthData";
// Components
import FormInputText from "views/components/block/FormInputText";
import FormTextarea from "views/components/block/FormTextarea";
import FormImage from "views/components/block/FormImage";
import FormSubmitButton from "views/components/block/FormSubmitButton";
import PageTitle from "views/components/block/PageTitle";

const BoardCreate = () => {
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

  const createForm = (data: Record<string, any>) => {
    const formData = new FormData();
    formData.append("user_id", stringMyId || "");
    formData.append("title", data.title);
    if (image) {
      formData.append("image", image);
    }
    formData.append("body", data.body);

    return formData;
  };

  const onSubmit = async (data: Record<string, any>) => {
    const formData = createForm(data);
    await createBoardData(formData).then(() => {
      navigate("/boards");
    });
  };

  return (
    <>
      <PageTitle
        title={"掲示板作成"}
        padding={"10px"}
        classes={"text-center"}
      />
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
        <FormSubmitButton buttonTitle={"掲示板を作成する"} />
      </form>
    </>
  );
};

export default BoardCreate;
