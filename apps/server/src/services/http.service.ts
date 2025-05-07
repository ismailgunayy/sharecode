import express, { Express, RequestHandler, Router } from "express";
import http, { Server } from "http";

import config from "../config/env.config.js";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

class HTTPService {
	public server: Server;
	private app: Express;

	public constructor() {
		this.app = express();
		this.app.use(express.json());
		this.app.use(helmet());
		this.app.use(
			cors({
				origin: config.CLIENT_URL
			})
		);
		this.app.use(
			rateLimit({
				windowMs: 15 * 60 * 1000, // 15 minutes
				limit: 100,
				message: "Too many requests, please try again later."
			})
		);

		this.server = http.createServer(this.app);
	}

	public start(router: Router) {
		this.app.use("/api", router);

		this.server.listen(config.PORT, () => {
			console.log(`HTTP server listening on port ${config.PORT}`);
		});
	}

	public stop() {
		this.server.close();
	}

	public addMiddleware(middleware: RequestHandler) {
		this.app.use(middleware);
	}
}

export default HTTPService;
