import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hineri Cubix",
	description:
		"Leading enterprise solutions provider helping businesses transform digitally with cutting-edge technology and expert consulting services.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className="scroll-smooth" suppressHydrationWarning>
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
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
