import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>KTON: Kindle Highlight Manager</title>
				<meta
					name="description"
					content="A platform to organise, annotate and export your imported kindle highlights 📖📝"
				/>

				<meta name="google-site-verification" content="5rYKI5qv54lywaICk-K65AEQNxKGIbHYwO0IdAsLVCo" />

				<meta property="og:url" content="https://www.app.kton.xyz/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="KTON: Kindle Highlight Manager" />
				<meta
					property="og:description"
					content="A platform to organise, annotate and export your imported kindle highlights 📖📝"
				/>
				<meta property="og:image" content="https://app.kton.xyz/images/SEO-image.png" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="kton.xyz" />
				<meta property="twitter:url" content="https://www.app.kton.xyz/" />
				<meta name="twitter:title" content="KTON: Kindle Highlight Manager" />
				<meta
					name="twitter:description"
					content="A platform to organise, annotate and export your imported kindle highlights 📖📝"
				/>
				<meta name="twitter:image" content="https://app.kton.xyz/images/SEO-image.png" />

				<link rel="icon" href="/images/bookIcon.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
