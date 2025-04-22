import CacheService from "./cache.js";
import { Server as HTTPServer } from "http";
import { Server } from "socket.io";
import { TSession } from "../types/session.type.js";
import config from "../config/index.js";

class SocketService {
	private server: Server;
	private cacheService: CacheService;

	public constructor(cacheService: CacheService) {
		this.cacheService = cacheService;
		this.server = new Server({
			cors: {
				origin: config.CLIENT_URL
			}
		});
	}

	public start(httpServer: HTTPServer) {
		this.server.attach(httpServer);
		this.setupSocket();
	}

	public async stop() {
		await this.server.close();
	}

	private setupSocket() {
		this.server.on("connection", (socket) => {
			socket.on("join session", (sessionID) => {
				socket.join(sessionID);
			});

			socket.on("update", async ({ sessionID, data }) => {
				try {
					const response = await this.cacheService.get(sessionID);

					if (response) {
						const session: TSession = {
							...JSON.parse(response),
							data,
							updatedAt: new Date()
						};

						await this.cacheService.set(sessionID, JSON.stringify(session));
						this.server.to(sessionID).emit("update", data);
					}
				} catch (error) {
					console.error("Couldn't update and publish data", error);
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
					console.error("Couldn't update and publish language", error);
				}
			});

			socket.on("disconnect", (test) => {
				console.log(test);
			});
		});
	}
}

export default SocketService;
