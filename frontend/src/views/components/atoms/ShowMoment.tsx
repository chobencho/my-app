import moment from 'moment';
import 'moment/locale/ja';

export interface ShowMomentProps {
    fontSize: string;
    margin: string;
    classContent: string;
    time: Date;
    format: string;
}

const ShowMoment = ({ fontSize, margin, classContent, time, format }: ShowMomentProps) => {
    const styleMoment: React.CSSProperties = {
        fontSize: fontSize,
        margin: margin,
    };
    return (
        <p style={styleMoment} className={classContent}>
            {moment(time).format(format)}
        </p>
    );
};

export default ShowMoment;
