import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export interface ClearButtonProps {
    onClose: Function;
}
const ClearButton = ({ onClose }: ClearButtonProps) => {
    return (
        <button onClick={() => onClose()} className="">
            <HighlightOffIcon />
        </button>
    );
};

export default ClearButton;
