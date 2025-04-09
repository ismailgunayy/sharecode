import { CorsOptions } from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 8023;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3023";

export const env = {
	PORT,
	CLIENT_ORIGIN
};

const corsOptions: CorsOptions = {
	origin: CLIENT_ORIGIN
};

export const config = {
	cors: corsOptions
};
