import express, { Express, RequestHandler, Router } from "express";
import { httpLogger, logger } from "../common/logger.js";

import config from "../common/env.js";
import cors from "cors";
import helmet from "helmet";
import http from "http";
import rateLimit from "express-rate-limit";

class HTTPService {
	public server: http.Server;
	private app: Express;

	public constructor() {
		this.app = express();

		this.app.use(httpLogger);
		this.app.use(express.json());
		this.app.use(helmet());
		this.app.use(
			cors({
				origin: config.cors.CLIENT_URL
			})
		);
		this.app.set("trust proxy", 1);
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

		this.server.listen(config.general.PORT, () => {
			logger.info(`HTTP server listening on port ${config.general.PORT}`);
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
