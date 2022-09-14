import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;800&display=swap" rel="stylesheet" />        
        </ Head>
        <body className='
            bg-neutral-300 dark:bg-zinc-800
            text-zinc-800 dark:text-neutral-300
        '>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}