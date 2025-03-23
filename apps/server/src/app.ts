import { CLIENT_ORIGIN, PORT } from "./config/index.js";

import { Server } from "socket.io";

const io = new Server(PORT, {
	cors: {
		origin: CLIENT_ORIGIN
	}
});

let interval: NodeJS.Timeout;

io.on("connection", (socket) => {
	interval = setInterval(() => {
		console.log(io.engine.clientsCount);
	}, 1000);

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

function gracefulShutdown() {
	clearInterval(interval);
	io.close();
}

(["SIGINT", "SIGTERM"] satisfies NodeJS.Signals[]).forEach((signal) =>
	process.on(signal, gracefulShutdown)
);
