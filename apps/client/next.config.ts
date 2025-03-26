import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		WS_SERVER_URL: process.env.WS_SERVER_URL
	}
};

export default nextConfig;
