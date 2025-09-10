import axios from "axios";
import { env } from "@/common/env";

const shortenerApi = axios.create({
	baseURL: env.SHORTENER_API_BASE_URL
});

export const shortenUrl = async (url: string) => {
	try {
		shortenerApi.defaults.headers.common["Authorization"] = `Bearer ${env.SHORTENER_API_KEY}`;

		const { data: response, status } = await shortenerApi.post("/api/url/shorten", { url });

		if (status === 200 && response.data.url) {
			return response.data.url;
		}
	} catch {
		return url;
	}
};
