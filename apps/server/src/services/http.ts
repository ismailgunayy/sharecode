import express, { Router } from "express";
import http, { Server } from "http";

import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

class HTTPService {
	public server: Server;
	private app; // Express cannot be used as a type

	public constructor() {
		this.app = express();
		this.app.use(helmet());
		this.app.use(
			cors({
				origin: "*"
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

	public setup(router: Router) {
		this.app.use("/api", router);
	}
}

export default HTTPService;
