import { ThemeProvider } from 'next-themes'
import { RealViewportProvider } from "next-real-viewport"
import { AppContextProvider } from '../AppContext'
import Template from '../components/Template'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <RealViewportProvider>
            <ThemeProvider attribute='class' defaultTheme = 'light' enableSystem = {false}>
                <AppContextProvider>
                    <Template >
                        <Component {...pageProps} />
                    </Template>
                </AppContextProvider>
            </ThemeProvider>
        </RealViewportProvider>
    )
}

export default MyApp
