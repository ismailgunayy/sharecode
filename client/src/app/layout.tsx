import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "ShareCode",
  description: "Share your code seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
