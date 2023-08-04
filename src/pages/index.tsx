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
        <title>KTON</title>
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
