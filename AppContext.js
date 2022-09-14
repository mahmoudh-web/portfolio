import { useTheme } from "next-themes";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false) // used to delay the loading of the dark mode toggler until the app is fully mounted
    
    useEffect(() => {
        setMounted(true)
    }, [])

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark': 'light')
    }

    return (
        <AppContext.Provider value={{
            theme,
            changeTheme,
            mounted
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppContextProvider, useAppContext }