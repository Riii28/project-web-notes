import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'
    })

    const handleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme', newTheme)
            return newTheme
        })
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ handleTheme, theme }}>
            { children }
        </ThemeContext.Provider>
    ) 
}

export const useTheme = () => useContext(ThemeContext)

