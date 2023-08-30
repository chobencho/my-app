import { clearModal } from "lib/api/helper";

interface ModalCommonExpansionImageProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
}

const ModalCommonExpansionImage = ({
  setShowModal,
  image,
}: ModalCommonExpansionImageProps) => {
  // モーダルをクリックしても何もしない関数
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className="modal" onClick={() => clearModal(setShowModal)}>
        <img
          src={image}
          alt="modal image"
          className="block mx-auto w-4/5"
          onClick={handleBackdropClick}
        />
      </div>
    </>
  );
};

export default ModalCommonExpansionImage;
