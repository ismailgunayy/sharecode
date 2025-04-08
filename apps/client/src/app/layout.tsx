import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ShareCode",
	description: "Share your code seamlessly"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="shortcut icon"
					href="favicon_dall_e.ico"
					type="image/x-icon"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
