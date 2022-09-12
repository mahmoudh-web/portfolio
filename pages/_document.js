import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet" />
        </ Head>
        <body className='
            bg-gradient-to-tr from-rose-700 to-pink-600
            text-slate-200      
        '>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}