import { CLIENT_ORIGIN, PORT } from "@/config";

import { Server } from "socket.io";
import cors from "cors";
import express from "express";
import http from "http";
import mainRouter from "./routes";

const app = express();
app.use(
	cors({
		origin: CLIENT_ORIGIN
	})
);

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: CLIENT_ORIGIN
	}
});

app.use("/api", mainRouter());

const interval = setInterval(() => {
	console.log("Clients connected:", io.engine.clientsCount);
}, 1000);

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

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

function gracefulShutdown() {
	clearInterval(interval);
	io.close();
}

// TODO: Change with 'satisfies' and look into the package
(["SIGINT", "SIGTERM"] as NodeJS.Signals[]).forEach((signal) =>
	process.on(signal, gracefulShutdown)
);
