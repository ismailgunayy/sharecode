import config from "@/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import http from "http";
import mainRouter from "@/routes";
import rateLimit from "express-rate-limit";

const createHTTPServer = () => {
	const app = express();

	app.use(helmet());
	app.use(
		cors({
			origin: config.CLIENT_URL
		})
	);
	app.use(
		rateLimit({
			windowMs: 15 * 60 * 1000, // 15 minutes
			limit: 100,
			message: "Too many requests, please try again later."
		})
	);

	app.use("/api", mainRouter());

	return http.createServer(app);
};

export default createHTTPServer;
