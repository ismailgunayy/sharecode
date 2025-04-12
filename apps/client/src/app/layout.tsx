import "@/styles/globals.css";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

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
			<body>
				<Toaster
					position="bottom-right"
					toastOptions={{
						duration: 8000,
						removeDelay: 1000,
						style: {
							background: "#363636",
							color: "#fff"
						}
					}}
				/>
				{children}
			</body>
		</html>
	);
}
