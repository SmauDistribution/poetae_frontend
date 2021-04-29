import Head from "next/head";
import "../styles/public/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Poetae</title>
        <meta
          name="description"
          content="Un sito web sviluppato per aiutare a conoscere i poeti"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
