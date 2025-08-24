import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: false,
	env: {
		PORT: process.env.PORT,
		API_URL: process.env.API_URL,
		WS_SERVER_URL: process.env.WS_SERVER_URL,
		SHORTENER_API_URL: process.env.SHORTENER_API_URL
	}
};

export default nextConfig;
