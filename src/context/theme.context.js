import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : '')
    }, [])

    const changeTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    console.log({theme})

    return (
        <ThemeContext value={{ theme, changeTheme }} >
            {children}
        </ThemeContext>
    )
}

export const useTheme = () => {
    const theme = useContext(ThemeContext);
    return theme
}