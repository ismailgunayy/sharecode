import dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = Number(process.env.PORT) || 8023;
const CLIENT_URL = process.env.CLIENT_ORIGIN || "http://localhost:3023";

const REDIS_HOST = process.env.REDIS_HOST || "redis";
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || "";
const REDIS_URL = `redis://:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`;
const CACHE_SERVICE_SLEEP_TIME_IN_MINUTES =
	Number(process.env.CACHE_SERVICE_SLEEP_TIME_IN_MINUTES) || 10;

const config = {
	NODE_ENV,
	PORT,
	CLIENT_URL,
	REDIS_URL,
	CACHE_SERVICE_SLEEP_TIME_IN_MINUTES
};

Object.freeze(config);
export default config;
