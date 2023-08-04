import Head from "next/head";
import styles from "@/styles/Landing.module.scss";
import Navbar from "@/Components/Navbar";
import LandingDisplay from "@/Components/LandingDisplay";
import FeatureBanner from "@/Components/FeatureBanner";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";

export const getStaticProps: GetStaticProps<{
  total: number;
}> = async (context) => {
  const response = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACKENDURL}/total-highlights`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("response: ", response.data);

  return {
    props: {
      total: response.data,
    },
  };
};

export default function Landing({
  total,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Resources/SEOIMAGE_SMALL.jpg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="A platform to organise, annotate and export your kindle highlights 📖📝"
        />
        <meta property="og:url" content="https://kton.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Highlight Manager" />
        <meta
          property="og:description"
          content="A platform to organise, annotate and export your kindle highlights 📖📝"
        />
        <meta property="og:image" content="/Resources/SEOIMAGE_SMALL.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="kton.xyz" />
        <meta property="twitter:url" content="https://kton.xyz/" />
        <meta name="twitter:title" content="Kindle Manager" />
        <meta
          name="twitter:description"
          content="A platform to organise, annotate and export your kindle highlights 📖📝"
        />
        <meta name="twitter:image" content="/Resources/SEOIMAGE.jpg" />

        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/img/book-icon.png"
        />

        <title>KTON</title>
        <link rel="icon" href="/Resources/SEOIMAGE_SMALL.jpg" />
      </Head>

      <div className={styles.main}>
        <Navbar total={total.toLocaleString()} />
        <LandingDisplay />
        <FeatureBanner image="Highlights" type="mobile" position="right" />
        <FeatureBanner image="Book" type="laptop" position="left" />
        <FeatureBanner image="Share" type="laptop" position="right" />
        <FeatureBanner image="Library" type="mobile" position="right" />
      </div>
    </>
  );
}
