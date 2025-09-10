const NODE_ENV = process.env.NODE_ENV;
const PORT = Number(process.env.PORT) || 3023;
const API_URL = process.env.API_URL || "http://localhost:3123/api";
const WS_SERVER_URL = process.env.WS_SERVER_URL || "ws://localhost:3123";
const SHORTENER_API_BASE_URL = process.env.SHORTENER_API_BASE_URL || "http://localhost:3024/api";
// Local default key for development and testing purposes
const SHORTENER_API_KEY =
	process.env.SHORTENER_API_KEY || "6a6d2aa49562a415020e63caea24e92c5ec04466fda18d7e19d1acbf29bcb616";

export const env = {
	NODE_ENV,
	PORT,
	API_URL,
	WS_SERVER_URL,
	SHORTENER_API_BASE_URL,
	SHORTENER_API_KEY
};
