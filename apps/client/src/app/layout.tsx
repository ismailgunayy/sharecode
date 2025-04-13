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
						duration: 5023,
						className: "!bg-secondary !text-primary !p-2 !pl-4 !text-xl"
					}}
				/>
				{children}
			</body>
		</html>
	);
}
