import util from "util";
import Head from "next/head";
import Navbar from "@/Components/Navbar";
import { InferGetStaticPropsType } from "next";
import NotionService from "../../../services/notion-service";
import axios from "axios";
import styles from "../../styles/FeatureRelease.module.scss";
import FeatureReleaseItem from "@/Components/FeatureReleaseItem";

export const getStaticProps = async () => {
	const notionService = new NotionService();
	const featureReleaseItems = await notionService.getFeatureReleaseItems();

	return {
		props: {
			featureReleaseItems: featureReleaseItems,
		},
	};
};

const FeatureReleases = ({ featureReleaseItems }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>KTON</title>
			</Head>

			<div className={styles.featureReleasePage}>
				<div className={styles.featureReleasePage_Width}>
					{featureReleaseItems != null && featureReleaseItems.length > 0 ? (
						featureReleaseItems.map((featureReleaseItem, index) => (
							<FeatureReleaseItem data={featureReleaseItem} key={index} />
						))
					) : (
						<h1>No updates yet</h1>
					)}
				</div>
			</div>
		</>
	);
};

export default FeatureReleases;
