import dotenv from "dotenv";

dotenv.config();

export const PORT = Number(process.env.PORT) || 8023;
export const CLIENT_ORIGIN =
	process.env.CLIENT_ORIGIN || "http://localhost:3023";
