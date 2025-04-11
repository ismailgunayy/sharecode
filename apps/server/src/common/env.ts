import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 8023;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3023";

const env = {
	PORT,
	CLIENT_ORIGIN
};

export default env;
