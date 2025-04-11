import { Server } from "socket.io";
import config from "@/common/config";

const createSocketServer = () => {
	const io = new Server({
		cors: config.cors
	});

	io.on("connection", (socket) => {
		const { id } = socket;

		console.log("Clients:", io.engine.clientsCount);
		console.log(`new client ${id}`);

		socket.on("update", (data) => {
			io.emit("update", data);
		});

		socket.on("disconnect", () => {
			console.log(`disconnect ${id}`);
		});
	});

	return io;
};

export default createSocketServer;
