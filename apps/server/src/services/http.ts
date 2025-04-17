import express, { NextFunction, Request, Response, Router } from "express";
import http, { Server } from "http";

import CacheService from "./cache.js";
import config from "../config/index.js";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

class HTTPService {
	public server: Server;
	private cacheService: CacheService;
	private app; // Express cannot be used as a type

	public constructor(cacheService: CacheService) {
		this.cacheService = cacheService;

		this.app = express();
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
		this.app.use(this.startCacheService.bind(this));

		this.server = http.createServer(this.app);
	}

	private async startCacheService(
		_req: Request,
		_res: Response,
		next: NextFunction
	) {
		if (!this.cacheService.isConnected()) {
			await this.cacheService.start();
		}

		next();
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
}

export default HTTPService;
