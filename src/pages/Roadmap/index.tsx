import util from 'util';
import Head from 'next/head';
import Navbar from '@/Components/Navbar';
import {
	GetServerSideProps,
	GetServerSidePropsContext,
	GetStaticProps,
	InferGetServerSidePropsType,
	InferGetStaticPropsType,
	PreviewData,
} from 'next';
import axios from 'axios';
import styles from '../../styles/Terms.module.scss';
import Image from 'next/image';
import NotionService from '../../../services/notion-service';
import { ParsedUrlQuery } from 'querystring';

// export const getStaticProps: GetStaticProps<{
// 	total: number;
// }> = async (context) => {
// 	const response = await axios({
// 		method: 'GET',
// 		url: `${process.env.NEXT_PUBLIC_BACKENDURL}/total-highlights`,
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	});

// 	return {
// 		props: {
// 			total: response.data,
// 		},
// 	};
// };

export const getServerSideProps = async () => {
	const notionService = new NotionService();
	const roadMapItems = await notionService.getRoadmapItems();

	return {
		props: {
			roadMapItems,
		},
	};
};

const Roadmap = ({ roadMapItems }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	console.log(util.inspect({ roadMapItems }, { showHidden: false, depth: null, colors: true }));
	return (
		<>
			<Head>
				<link rel="icon" href="/Resources/SEOIMAGE_SMALL.jpg" />
				<meta name="theme-color" content="#000000" />
				<meta name="description" content="Roadmap for KTON, the all in one highlight manager 📖📝" />
				<meta property="og:url" content="https://kton.xyz/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Highlight Manager" />
				<meta property="og:description" content="Roadmap for KTON, the all in one highlight manager 📖📝" />
				<meta property="og:image" content="/Resources/SEOIMAGE_SMALL.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="kton.xyz" />
				<meta property="twitter:url" content="https://kton.xyz/" />
				<meta name="twitter:title" content="Kindle Manager" />
				<meta name="twitter:description" content="Roadmap for KTON, the all in one highlight manager 📖📝" />
				<meta name="twitter:image" content="/Resources/SEOIMAGE.jpg" />

				<link rel="apple-touch-icon" sizes="512x512" href="/img/book-icon.png" />

				<title>KTON Roadmap</title>
				<link rel="icon" href="/Resources/book-icon.jpg" />
			</Head>

			<div className={styles.termsPage}>
				<div className={styles.termsPage_Width}>
					<ul className="relative border-l border-gray-200 ">
						{roadMapItems.map((roadMapItem, index) => (
							<li key={index} className="mb-10 ml-4">
								<div className="absolute w-5 h-5 rounded-full mt-2.5 -left-2.5 border bg-ktonBlue"></div>
								<time className="mb-1 text-sm font-normal leading-none text-gray-400">{roadMapItem.date}</time>
								<h3 className="text-lg font-semibold  dark:text-white">{roadMapItem.title}</h3>
								{roadMapItem.cover !== '' && (
									<Image
										src={roadMapItem.cover}
										width="750"
										height="482"
										alt="Benefits"
										layout="intrinsic"
										priority={true}
										className="rounded-xl"
									/>
								)}
								<p className="mb-4 text-base font-normal text-gray-400">{roadMapItem.description}</p>
								<div className="flex flex-row">
									{roadMapItem.tags.map((tag, index) => (
										<p key={index}>{tag.name}</p>
									))}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Roadmap;
