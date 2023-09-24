import React, { useState } from "react";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Function
import { createCommunityComment } from "lib/api/communityChat";
import { createMessage } from "lib/api/chat";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { clearPreview } from "lib/api/helper";

interface ModalCommonMessageFormProps {
  preview: string;
  setPreview: React.Dispatch<React.SetStateAction<string>>;
  generalId: string;
  stringMyId: string;
  image: File | undefined;
  handleGetData: Function;
  another_id: string;
  discrimination: string;
}


const ModalCommonMessageForm = ({
  preview,
  setPreview,
  generalId,
  stringMyId,
  image,
  handleGetData,
  another_id,
  discrimination,
}: ModalCommonMessageFormProps) => {
  // State
  const [modalBody, setModalBody] = useState<string>("");

  const createFormData = (general_id: string): FormData => {
    const formData = new FormData();

    formData.append(general_id, generalId ? generalId : "");
    formData.append("user_id", stringMyId ? stringMyId : "");
    formData.append("body", modalBody);
    if (image) formData.append("image", image);

    return formData;
  };

  const handleCreateCommonMessageForm = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const data = createFormData(another_id);

    if (discrimination == "community") {
      await createCommunityComment(data).then(() => { });
    } else if (discrimination == "chat") {
      await createMessage(data).then(() => { });
    }
    setModalBody("");
    handleGetData();
    clearPreview(setPreview);
  };

  return (
    <>
      <form
        onSubmit={handleCreateCommonMessageForm}
        className="border flex justify-between"
      >
        <div className="modal">
          <div className="modal-content max-modal">
            <button onClick={() => clearPreview(setPreview)} className="">
              <HighlightOffIcon />
            </button>
            <p className="text-sm text-center my-3">ファイルの送信</p>
            <img src={preview} alt="preview img" className="w-4/5 m-auto" />
            <div className="text-center my-3">
              <textarea
                placeholder="Hello World"
                className="border w-4/5 rounded p-1"
                value={modalBody}
                onChange={(e) => {
                  setModalBody(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="text-center w-full mb-5">
              <button
                type="submit"
                className="bg-blue-base text-white text-sm px-5 py-1 w-3/5"
              >
                送信
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalCommonMessageForm;
