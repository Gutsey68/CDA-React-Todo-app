import { createContext, ReactNode, useEffect, useState } from 'react';

export const DarkModeContext = createContext<{ isDark: boolean; setIsDark: (isDark: boolean) => void; toggleTheme: () => void }>({
    isDark: false,
    setIsDark: () => {},
    toggleTheme: () => {}
});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDark(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        localStorage.setItem('darkMode', newIsDark.toString());
        document.documentElement.classList.toggle('dark', newIsDark);
    };

    return <DarkModeContext.Provider value={{ isDark, setIsDark, toggleTheme }}>{children}</DarkModeContext.Provider>;
};
