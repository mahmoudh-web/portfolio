import { useTheme } from "next-themes";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false) // used to delay the loading of the dark mode toggler until the app is fully mounted
    const [width, setWidth]   = useState(0);
    const [height, setHeight] = useState(0);
    const [open, setOpen] = useState(false)
    
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

    const handleCloseMenu = () => {
        if (open) {
            setOpen(prev => !prev)
        }
    }

    return (
        <AppContext.Provider value={{
            theme,
            changeTheme,
            mounted,
            width,
            height,
            open,
            setOpen,
            handleCloseMenu
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppContextProvider, useAppContext }