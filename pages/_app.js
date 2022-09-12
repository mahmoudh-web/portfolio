import { ThemeProvider } from 'next-themes'
import { AppContextProvider } from '../AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
            <ThemeProvider attribute='class'>
                <AppContextProvider>
                        <Component {...pageProps} />
                </AppContextProvider>
            </ThemeProvider>
    )
}

export default MyApp
