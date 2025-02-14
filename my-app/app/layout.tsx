import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const genJyuuGothic = localFont({
	src: "/fonts/GenJyuuGothicL-Normal.ttf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "ひねりキュービックス",
	description:
		"ひねりキュービックスはビジネスの小さな「不便」をITで解決するお手伝いをしているサービスです。",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="ja"
			className={`scroll-smooth ${genJyuuGothic.className}`}
			suppressHydrationWarning
		>
			<head>
				<script type="application/ld+json" id="org-schema">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "Enterprise Solutions",
						url: "https://enterprise-solutions.com",
						logo: "https://enterprise-solutions.com/logo.png",
						description:
							"Leading enterprise solutions provider helping businesses transform digitally.",
						address: {
							"@type": "PostalAddress",
							streetAddress: "123 Business Avenue",
							addressLocality: "San Francisco",
							addressRegion: "CA",
							postalCode: "94105",
							addressCountry: "US",
						},
					})}
				</script>
			</head>
			<body className="bg-amber-50 text-gray-900 selection:bg-sky-100">{children}</body>
		</html>
	);
}
