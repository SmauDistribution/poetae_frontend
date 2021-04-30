import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/public/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Poetae</title>
        <meta
          name="description"
          content="Un sito web sviluppato per conoscere meglio i poeti italiani"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
