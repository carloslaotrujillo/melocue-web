import Head from 'next/head'
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Melocue</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <h1 className={homeStyles.h1}></h1>      
    </div>
  );
}
