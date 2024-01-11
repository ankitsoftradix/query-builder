import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContent from "../components/mainContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Query Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent />
    </div>
  );
}
