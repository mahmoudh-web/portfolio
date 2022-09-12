import { useTheme } from "next-themes";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const {theme, setTheme} = useTheme()
    const [darkMode, setDarkMode] = useState(false)
    
    setTheme('light')
    
    useEffect(() => {
        setTheme(darkMode ? "dark" : "light")
    }, [darkMode])

    return (
        <AppContext.Provider value={{
            theme,
            darkMode,
            setDarkMode,
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppContextProvider, useAppContext }