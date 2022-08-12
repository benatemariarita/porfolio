import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/karla/200.css";
import "@fontsource/karla/300.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/500.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import "@fontsource/karla/800.css";
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Maria Rita Benate Portfolio</title>
      <meta property='og:title' content='Suporte Philips Brasil' />
      <meta property='og:image' content='teste-thumb.png' />
      <meta property='og:description' content='Como eu fiz o redesenho da página de suporte da Philips Brasil apenas aplicando pesquisa secundária.' />
      <meta property='og:url' content='https://mariaritabenate.com.br/philips-support-page' />
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>

}

export default MyApp
