import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { InfoData } from "interfaces/index";

export interface ModalInformationProps {
  info: InfoData | null;
  onClose: Function;
}

const ModalInformation = ({ onClose, info }: ModalInformationProps) => {
  return (
    <>
      <div className="modal">
        <p className="modal-content">
          <button onClick={() => onClose()} className="">
            <HighlightOffIcon />
          </button>
          {info && (
            <div>
              <p className="text-center">{info.title}</p>
              <p className="w-4/5 text-xs whitespace-pre-wrap m-auto my-5">
                {info.body}
              </p>
            </div>
          )}
        </p>
      </div>
    </>
  );
};

export default ModalInformation;
