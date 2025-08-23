import CacheService from "./cache.service.js";
import { Server as HTTPServer } from "http";
import { Server } from "socket.io";
import { TSession } from "../types/session.type.js";
import config from "../common/env.js";
import { logger } from "../common/logger.js";

class SocketService {
	private server: Server;
	private cacheService: CacheService;

	public constructor(cacheService: CacheService) {
		this.cacheService = cacheService;
		this.server = new Server({
			cors: {
				origin: config.cors.CLIENT_URL
			},
			pingTimeout: 20000, // 20 seconds
			pingInterval: 10000, // 10 seconds
			connectTimeout: 20000, // 20 seconds
			transports: ["websocket", "polling"]
		});
	}

	public start(httpServer: HTTPServer) {
		logger.info("Starting Socket Service...");
		this.server.attach(httpServer);
		this.setupSocket();
	}

	public async stop() {
		await this.server.close();
	}

	private setupSocket() {
		this.server.on("connection", (socket) => {
			logger.info(`Client connected: ${socket.id}`);

			socket.on("join session", (sessionID) => {
				socket.join(sessionID);
				logger.info(`Socket ${socket.id} joined session: ${sessionID}`);
			});

			socket.on("update", async ({ sessionID, data }) => {
				try {
					const response = await this.cacheService.get(sessionID);

					if (response) {
						const session: TSession = {
							...JSON.parse(response),
							data
						};

						await this.cacheService.set(sessionID, JSON.stringify(session));
						this.server.to(sessionID).emit("update", data);
					}
				} catch (error) {
					logger.error("Couldn't update and publish data", error);
				}
			});

			socket.on("language", async ({ sessionID, language }) => {
				try {
					const response = await this.cacheService.get(sessionID);

					if (response) {
						const session: TSession = {
							...JSON.parse(response),
							language
						};

						await this.cacheService.set(sessionID, JSON.stringify(session));
						this.server.to(sessionID).emit("language", language);
					}
				} catch (error) {
					logger.error("Couldn't update and publish language", error);
				}
			});

			// Add heartbeat/ping handling
			socket.on("ping", () => {
				socket.emit("pong");
			});

			socket.on("disconnect", (reason) => {
				logger.info(`Client disconnected: ${socket.id} - Reason: ${reason}`);
			});

			socket.on("error", (error) => {
				logger.error(`Socket error for ${socket.id}:`, error);
			});

			// Clean up on disconnect
			socket.on("disconnecting", () => {
				logger.info(`Client disconnecting: ${socket.id}`);
				// Socket.IO automatically handles room cleanup
			});
		});
	}
}

export default SocketService;
