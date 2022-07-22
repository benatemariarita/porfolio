import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
   <Head>
        <title>Maria Rita Benate Portfolio</title>
        <meta name="description" content="Batatinha batatinha" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps}/>
  </>
 
}

export default MyApp
