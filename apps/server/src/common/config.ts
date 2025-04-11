import { CorsOptions } from "cors";
import env from "./env";

const corsOptions: CorsOptions = {
	origin: env.CLIENT_ORIGIN
};

const config = {
	cors: corsOptions
};

export default config;
