import { Server } from "socket.io";
import { PORT, CLIENT_ORIGIN } from "./config/";

const io = new Server(PORT, {
	cors: {
		origin: CLIENT_ORIGIN,
	},
});

let interval: NodeJS.Timeout;

io.on("connection", (socket) => {
	const { id, emit } = socket;

	console.log(`new client ${id}`);

	interval = setInterval(() => {
		socket.emit("chat", "new ");
	}, 1000);

	socket.on("disconnect", () => {
		console.log(`disconnect ${id}`);
	});
});

process.on("SIGINT", () => {
	clearInterval(interval);
	io.disconnectSockets();
	io.close();
});
