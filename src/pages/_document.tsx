import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
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

				<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/manifest.json"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
