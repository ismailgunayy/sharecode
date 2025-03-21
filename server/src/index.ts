import { Server } from "socket.io";
import { PORT, CLIENT_ORIGIN } from "./config/";

const io = new Server(PORT, {
	cors: {
		origin: CLIENT_ORIGIN,
	},
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

process.on("SIGINT", () => {
	io.disconnectSockets();
	io.close();
});
