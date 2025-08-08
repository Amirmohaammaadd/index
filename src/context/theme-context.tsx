import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark"

type ThemeContext = {
    theme: Theme
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
    toggleTheme: () => void
}

const themeContext = createContext<ThemeContext | null>(null)

export const ThemeContext = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("theme") as Theme ;
        return savedTheme ?? "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }


    return <>
        <themeContext.Provider value={{
            theme,
            setTheme,
            toggleTheme
        }}>
            {children}
        </themeContext.Provider>
    </>
}

export const useThemeContext = () => {
    const context = useContext(themeContext)

    if (!context) {
        throw Error("themeContext must be whitin a value")
    }

    return context
}