import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
	title: "SuperAI | 3-9 June 2024 | Singapore",
	description:
		"Singapore AI Week is the year's widest range of meetups, workshops, hackathons networking drinks and parties with SuperAI being the flagship event of the week – creating unparalleled networking opportunities.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="./favicon.ico" />
				<meta content="yes" name="apple-mobile-web-app-capable" />
				<meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
				<meta name="author" content={metadata.description} />
				<meta property="og:title" content={metadata.title} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://raw.githubusercontent.com/DarwinBlock/singapore-ai-week/main/public/og.png" />
				<meta property="og:url" content="https://www.superai.com" />
				<meta property="og:site_name" content={metadata.title} />
				<meta property="og:description" content={metadata.description} />
				<meta property="keywords" content="superAI" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://www.superai.com" />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.title} />
				<meta name="twitter:image" content="https://raw.githubusercontent.com/DarwinBlock/singapore-ai-week/main/public/og.png" />
				<meta name="twitter:tags" content="superAI" />

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
					integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			</head>
			<body>{children}</body>
		</html>
	);
}
