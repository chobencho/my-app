import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="w-full shadow bg-white">
                <Link to={'/'}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/header/logo.png`}
                        alt="Description of the image"
                        className="w-3/4 m-auto max-w-xs"
                    />
                </Link>
            </div>
        </>
    );
};

export default Header;
