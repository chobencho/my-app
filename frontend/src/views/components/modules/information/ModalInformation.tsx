import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { InfoData } from "interfaces/index";

export interface ModalInformationProps {
  info: InfoData | null;
  onClose: Function;
}

const ModalInformation = ({ onClose, info }: ModalInformationProps) => {
  return (
    <>
      <div className="w-full h-full bg-gray-600 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center z-50">
        <p className="max-modal bg-white p-2">
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
