import { useState } from "react";
// Interface
import { InfoData } from "interfaces/index";
import ModalInformation from "views/components/modules/information/ModalInformation";

import { clearModal } from "lib/api/helper";

export interface InformationProps {
  infos: InfoData[];
}

const Information = ({ infos }: InformationProps) => {
  // State
  const [showModal, setShowModal] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<InfoData | null>(null);

  const handleShowInfoModal = (info: InfoData) => {
    setSelectedInfo(info);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    clearModal(setShowModal);
    setSelectedInfo(null);
  };
  return (
    <>
      <p className="text-sm text-center pt-1 pb-2">お知らせ一覧</p>
      <div className="border">
        {infos?.map((info) => (
          <button
            key={info.id}
            className="border inline-block p-2 w-full"
            onClick={() => handleShowInfoModal(info)}
          >
            <div className="flex items-center">
              <p className="text-sm pr-2">{info.title}</p>
              <p className="required">重要</p>
            </div>
            <p className="txt-limit-1 text-xs pt-1 text-left">{info.body}</p>
          </button>
        ))}
      </div>
      {showModal ? (
        <ModalInformation info={selectedInfo} onClose={handleCloseModal} />
      ) : null}
    </>
  );
};

export default Information;
