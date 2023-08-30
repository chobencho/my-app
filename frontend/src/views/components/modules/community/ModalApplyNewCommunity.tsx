import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState, useContext } from "react";
import { AuthContext } from "App";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Function
import { sendMailApplyNewCommunity } from "lib/api/community";
import { useAuthData } from "views/components/modules/common/useAuthData";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export interface ModalApplyNewCommunityProps {
  onClose: Function;
}

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },
  modalContent: {
    width: "80%",
    maxHeight: "80%",
    background: "#fff",
    padding: "5px",
  },
  modalImg: {
    display: "block",
    margin: "0 auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ModalApplyNewCommunity = ({ onClose }: ModalApplyNewCommunityProps) => {
  const classes = useStyles();
  // State
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  // Id
  const { stringMyId } = useAuthData();
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = async (data: Record<string, any>) => { // Record<string, any>型は一時的な解決策です。適切な型情報を追加してください。

    const title = data.title;
    const body = data.body;

    if (stringMyId !== undefined) {
      await sendMailApplyNewCommunity(stringMyId, title, body).then(() => {
        onClose()
      });
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={`${classes.modal}`}>

        <div className={`${classes.modalContent}`}>
          <button onClick={() => onClose()} className="">
            <HighlightOffIcon />
          </button>
          <p className="text-center text-sm pt-1 pb-3">
            新規コミュニティを申請する
          </p>

          <div className="input-part px-3">
            <div className="flex items-center">
              <b className="input-title">コミュニティ名</b>
              <p className="required">必須</p>
            </div>


            <input
              type="text"
              placeholder="おすすめの参考書について語ろう！"
              className="input-text"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-red-500">タイトルは必須です。</p>
            )}
          </div>

          <div className="input-part px-3">
            <div className="flex items-center">
              <b className="input-title">概要</b>
              <p className="required">必須</p>
            </div>

            <textarea
              placeholder="みなさんのおすすめの本や参考書を共有して知見を深めていきたい！そんな情報共有コミュニティです！"
              className="input-text whitespace-pre-wrap h-32"
              {...register("body", { required: true })} // 内容のバリデーションルール
            ></textarea>
            {errors.body && (
              <p className="text-red-500">内容は必須です。</p>
            )}
          </div>

          <div className="px-3 text-center">
            <button
              type="submit"
              className="text-white bg-blue-base w-full text-xs py-2 px-5"
            >
              新規コミュニティ申請
            </button>
            <div className="py-3">
              <p className="text-10 text-gray-800">※注意※</p>
              <p className="text-10 text-gray-800">
                他人の誹謗中傷や公序良俗に反するコミュニティであると判断される場合は、申請を否認する可能性があります。
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalApplyNewCommunity;
