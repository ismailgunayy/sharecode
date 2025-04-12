import { env } from "./env";

const BASE_URL = env.API_URL;

const withBase = (path: string) => `${BASE_URL}${path}`;

const ENDPOINTS = {
	BASE_URL,
	SESSION: {
		GET: withBase("/session"),
		CREATE: withBase("/session")
	}
};

export default ENDPOINTS;
