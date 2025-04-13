import CacheService from "./cache.js";
import { Server } from "socket.io";
import { TSession } from "../types/common.type.js";
import config from "../config/index.js";

class SocketService {
	public server: Server;
	private cacheService: CacheService;

	public constructor(cacheService: CacheService) {
		this.cacheService = cacheService;
		this.server = new Server({
			cors: {
				origin: config.CLIENT_URL
			}
		});

		this.server.on("connection", (socket) => {
			socket.on("create room", (sessionID) => {
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
				} catch {
					console.error("Couldn't update and publish the data");
				}
			});

			socket.on("disconnect", () => {});
		});
	}
}

export default SocketService;
