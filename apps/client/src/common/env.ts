const NODE_ENV = process.env.NODE_ENV;
const PORT = Number(process.env.PORT) || 3023;
const API_URL = process.env.API_URL || "http://localhost:8023/api";
const WS_SERVER_URL = process.env.WS_SERVER_URL || "ws://localhost:8023";

export const env = {
	NODE_ENV,
	PORT,
	API_URL,
	WS_SERVER_URL
};
