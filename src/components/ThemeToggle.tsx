import { Moon, Sun } from 'lucide-react';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useContext(DarkModeContext);

    return (
        <button onClick={toggleTheme} className="p-2 text-white">
            {isDark ? <Sun className="w-[25px] h-[25px]" /> : <Moon className="w-[25px] h-[25px]" />}
        </button>
    );
};

export default ThemeToggle;
