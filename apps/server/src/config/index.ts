import dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = Number(process.env.PORT) || 8023;
const CLIENT_URL = process.env.CLIENT_ORIGIN || "http://localhost:3023";

const config = {
	NODE_ENV,
	PORT,
	CLIENT_URL
};

export default config;
