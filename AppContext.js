import { useTheme } from "next-themes";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false) // used to delay the loading of the dark mode toggler until the app is fully mounted
    const [width, setWidth]   = useState(0);
    const [height, setHeight] = useState(0);
    
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        setMounted(true)
        updateDimensions()
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark': 'light')
    }

    return (
        <AppContext.Provider value={{
            theme,
            changeTheme,
            mounted,
            width,
            height
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppContextProvider, useAppContext }