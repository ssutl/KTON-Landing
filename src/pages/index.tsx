import Head from "next/head";
import styles from "@/styles/Landing.module.scss";
import FeatureBanner from "@/Components/FeatureBanner";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Membership from "./Membership";

export default function Landing() {
	return (
		<>
			<Head>
				<title>KTON - the ultimate kindle highlights management platform</title>
				<meta name="google-site-verification" content="5rYKI5qv54lywaICk-K65AEQNxKGIbHYwO0IdAsLVCo" />
			</Head>

			<div className={styles.main}>
				<FeatureBanner image="Library" side="right" />
				<FeatureBanner image="Book" side="left" />
				<FeatureBanner image="Graphs" side="right" />
				<Membership />
			</div>
		</>
	);
}
