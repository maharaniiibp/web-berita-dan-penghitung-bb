import { Inter } from "@next/font/google";
import Head from "next/head";
import Home from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function Homeapp() {
  return (
    <>
      <Head>
        <title>SportNews</title>
        <meta name="description" content="SportNews" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
