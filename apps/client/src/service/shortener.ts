import axios from "axios";
import { env } from "@/common/env";

const shortenerApi = axios.create({
	baseURL: env.SHORTENER_API_URL
});

const authenticate = async () => {
	const { data, status } = await shortenerApi.get("/auth");

	if (status === 200 && data.accessToken) {
		shortenerApi.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
	}
};

export const shortenUrl = async (url: string) => {
	try {
		if (!shortenerApi.defaults.headers.common["Authorization"]) {
			await authenticate();
		}

		const { data, status } = await shortenerApi.post("/url/shorten", { url });

		if (status === 200 && data.url) {
			return data.url;
		}
	} catch {
		return url;
	}
};
