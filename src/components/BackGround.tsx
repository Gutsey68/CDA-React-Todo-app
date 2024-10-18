import { useContext } from 'react';
import backGroundDark from '../assets/bg-desktop-dark.jpg';
import backGroundLight from '../assets/bg-desktop-light.jpg';
import { DarkModeContext } from '../context/DarkModeContext';

function BackGround() {
    const { isDark } = useContext(DarkModeContext);
    return (
        <>
            {isDark ? (
                <img className="top-0 left-0 absolute w-full -z-10" src={backGroundDark} alt="" />
            ) : (
                <img className="top-0 left-0 absolute w-full -z-10" src={backGroundLight} alt="" />
            )}
        </>
    );
}
export default BackGround;
