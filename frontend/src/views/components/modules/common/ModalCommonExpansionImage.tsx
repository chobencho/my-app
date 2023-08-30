import { clearModal } from "lib/api/helper";

interface ModalCommonExpansionImageProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
}

const ModalCommonExpansionImage = ({
  setShowModal,
  image,
}: ModalCommonExpansionImageProps) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className="w-full h-full bg-gray-600 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center z-50 "
        onClick={() => clearModal(setShowModal)}
      >
        <div className="max-modal">
          <img
            src={image}
            alt="modal image"
            className="block mx-auto"
            onClick={handleBackdropClick}
          />
        </div>
      </div>
    </>
  );
};

export default ModalCommonExpansionImage;
