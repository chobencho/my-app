// Components
import BoardCreateForm from "views/components/modules/board/BoardCreateForm";
// import GoBackButton from "views/components/modules/common/GoBackButton";

const BoardCreate = () => {
  return (
    <>
      <p className="text-center py-3">掲示板新規作成</p>
      <BoardCreateForm />
    </>
  );
};

export default BoardCreate;
