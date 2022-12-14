import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap" rel="stylesheet"></link>
            {/* <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;800&display=swap" rel="stylesheet" /> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet" /> */}
        </ Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}
