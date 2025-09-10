import dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = Number(process.env.PORT) || 3123;
const CLIENT_URL = process.env.CLIENT_ORIGIN || "http://localhost:3023";

const REDIS_HOST = process.env.REDIS_HOST || "redis";
const REDIS_PORT = Number(process.env.REDIS_PORT) || 6380;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || "";
const REDIS_URL = `redis://:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`;
const SLEEP_TIME_IN_MINUTES = Number(process.env.CACHE_SERVICE_SLEEP_TIME_IN_MINUTES) || 10;
const DATA_TTL_IN_HOURS = Number(process.env.CACHE_SERVICE_DATA_TTL_IN_HOURS) || 24;

const config = {
	general: {
		NODE_ENV,
		PORT
	},
	cors: {
		CLIENT_URL
	},
	cache: {
		REDIS_URL,
		SLEEP_TIME_IN_MINUTES,
		DATA_TTL_IN_HOURS
	}
};

Object.freeze(config);
export default config;
