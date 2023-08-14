import Head from "next/head";
import styles from "@/styles/Landing.module.scss";
import LandingDisplay from "@/Components/LandingDisplay";
import FeatureBanner from "@/Components/FeatureBanner";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Landing() {
  return (
    <>
      <Head>
        <title>KTON</title>
      </Head>

      <div className={styles.main}>
        <LandingDisplay />
        <FeatureBanner image="Highlights" type="mobile" position="right" />
        <FeatureBanner image="Book" type="laptop" position="left" />
        <FeatureBanner image="Library" type="mobile" position="right" />
        <FeatureBanner image="Share" type="laptop" position="left" />
      </div>
    </>
  );
}
