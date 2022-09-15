import { ThemeProvider } from 'next-themes'
import { AppContextProvider } from '../AppContext'
import Template from '../components/Template'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute='class' defaultTheme = 'light' enableSystem = {true}>
            <AppContextProvider>
                <Template >
                    <Component {...pageProps} />
                </Template>
            </AppContextProvider>
        </ThemeProvider>
    )
}

export default MyApp
