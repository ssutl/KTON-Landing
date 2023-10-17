import Head from "next/head";
import Navbar from "@/Components/Navbar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import styles from "../../styles/Terms.module.scss";

const termsData = [
	{
		title: "Introduction",
		content: [
			"These Terms govern your use of the KTON website, available at [website URL], and any related services (collectively referred to as the 'Service'). Your use of the Service is also subject to our Privacy Policy, available at [privacy policy URL]. By using the Service, you acknowledge that you have read, understood, and agreed to these Terms and our Privacy Policy.",
			"If you do not agree with these Terms or our Privacy Policy, please do not use the Service. These Terms apply to all users and visitors of the Service.",
		],
	},
	{
		title: "Communications",
		content: [
			"By creating an account on our Service, you consent to receive newsletters, marketing materials, and other communications from us. You may opt out of these communications by following the unsubscribe link provided or contacting us at [contact email].",
		],
	},
	{
		title: "Using Our Service",
		content: [
			"By accessing the KTON website, you agree to be bound by these Terms. We reserve the right to modify these Terms, with revisions indicated by the 'Last updated' date. Your continued use of the Service after any such modifications constitutes your acceptance of the updated Terms.",
			"Your imported notes data remains under your full ownership and control. We make no claim of ownership over your personal content.",
			"The Service is provided 'as is' without any guarantees. We are not liable for any loss of notes data or issues related to use. We reserve the right to terminate accounts, restrict activity, or modify service availability without notice. Accounts may be deactivated after prolonged inactivity.",
		],
	},
	{
		title: "Content Restrictions",
		content: [
			"You are responsible for the legality and appropriateness of any imported note content. Prohibited content includes copyrighted material, illegal content, and sexually explicit material. We reserve the right to delete or deny access to prohibited content without refund. Repeated violations may lead to account termination.",
		],
	},
	{
		title: "Payments & Billing",
		content: [
			"Paid subscriptions will be billed monthly or annually based on your selected plan. No refunds are provided for partial periods. We reserve the right to change pricing at any time. Existing subscribers will receive notice, and renewals after a change will be charged at the new rates.",
		],
	},
	{
		title: "Cancellation",
		content: [
			"You may cancel your paid subscription at any time from your account settings. The Service will remain available until the end of the current billing period.",
		],
	},
	{
		title: "Intellectual Property",
		content: [
			"The Service, along with its original content, features, and functionality, is and will remain the exclusive property of KTON. The Service is protected by copyright, trademark, and other applicable laws. You may not use our trademarks or trade dress without our prior written consent.",
		],
	},
	{
		title: "Termination",
		content: [
			"We reserve the right to terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, for any reason, including a breach of these Terms.",
		],
	},
];

const Terms = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/Resources/SEOIMAGE_SMALL.jpg" />
				<meta name="theme-color" content="#000000" />
				<meta name="description" content="Terms and conditions of KTON, the all in one highlight manager 📖📝" />
				<meta property="og:url" content="https://kton.xyz/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Highlight Manager" />
				<meta property="og:description" content="Terms and conditions of KTON, the all in one highlight manager 📖📝" />
				<meta property="og:image" content="/Resources/SEOIMAGE_SMALL.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="kton.xyz" />
				<meta property="twitter:url" content="https://kton.xyz/" />
				<meta name="twitter:title" content="Kindle Manager" />
				<meta
					name="twitter:description"
					content="Terms and conditions of KTON, the all in one highlight manager 📖📝"
				/>
				<meta name="twitter:image" content="/Resources/SEOIMAGE.jpg" />

				<link rel="apple-touch-icon" sizes="512x512" href="/img/book-icon.png" />

				<title>KTON Terms</title>
				<link rel="icon" href="/Resources/book-icon.jpg" />
			</Head>

			<div className={styles.termsPage}>
				<div className={styles.termsPage_Width}>
					<h1>Terms of Service</h1>
					<p className={styles.content}>Effective date: 15th October 2023</p>
					<p className={styles.content}>
						Welcome to KTON (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing and
						using our service, you agree to comply with these Terms of Service (&quot;Terms&quot;). Please read these
						Terms carefully before using our service.
					</p>

					{
						<ol type="1">
							{termsData.map((term, index) => (
								<li key={index} className={styles.title}>
									{term.title}
									<ol type="i" className={styles.content}>
										{term.content.map((item, subIndex) => (
											<li key={subIndex}>{item}</li>
										))}
									</ol>
								</li>
							))}
						</ol>
					}
				</div>
			</div>
		</>
	);
};

export default Terms;
