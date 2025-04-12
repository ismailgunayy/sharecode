import { Server } from "socket.io";
import { TSession } from "@/types/common.type";
import config from "@/config";
import redisClient from "./cache";

const createSocketServer = () => {
	const io = new Server({
		cors: {
			origin: config.CLIENT_URL
		}
	});

	io.on("connection", (socket) => {
		const { id } = socket;

		socket.on("create room", (sessionID) => {
			socket.join(sessionID);
		});

		socket.on("update", async ({ sessionID, data }) => {
			try {
				const response = await redisClient.get(sessionID);

				if (response) {
					const session: TSession = JSON.parse(response);
					await redisClient.set(
						sessionID,
						JSON.stringify({ ...session, data })
					);

					io.to(sessionID).emit("update", data);
				}
			} catch {
				console.error("Couldn't update and publish the data");
			}
		});

		socket.on("disconnect", () => {
			console.log(`disconnect ${id}`);
		});
	});

	return io;
};

export default createSocketServer;
