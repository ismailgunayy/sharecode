import dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = Number(process.env.PORT) || 8023;
const CLIENT_URL = process.env.CLIENT_ORIGIN || "http://localhost:3023";

const REDIS_HOST = process.env.REDIS_HOST || "redis";
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_URL = `redis://${REDIS_HOST}:${REDIS_PORT}`;

const config = {
	NODE_ENV,
	PORT,
	CLIENT_URL,
	REDIS_URL
};

export default config;
