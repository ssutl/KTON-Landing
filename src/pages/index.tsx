import Head from "next/head";
import styles from "@/styles/Landing.module.scss";
import FeatureBanner from "@/Components/FeatureBanner";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Membership from "./Membership";

export default function Landing() {
  return (
    <>
      <Head>
        <title>KTON</title>
      </Head>

      <div className={styles.main}>
        {/* <LandingDisplay /> */}
        <FeatureBanner image="Library" side="right" />
        <FeatureBanner image="Book" side="left" />
        <FeatureBanner image="Graphs" side="right" />
        <FeatureBanner image="Share" side="left" />
        <Membership />
      </div>
    </>
  );
}
