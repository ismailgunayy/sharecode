import config from "./config/index.js";
import createHTTPServer from "./services/http.js";
import createSocketServer from "./services/socket.js";

const httpServer = createHTTPServer();
const socketServer = createSocketServer();
socketServer.attach(httpServer);

httpServer.listen(config.PORT, () => {
	console.log(`Server listening on port ${config.PORT}`);
});

function gracefulShutdown() {
	socketServer.close();
	httpServer.close();
}

// TODO: Change with 'satisfies' and look into the 'sort-imports' package
(["SIGINT", "SIGTERM"] as NodeJS.Signals[]).forEach((signal) =>
	process.on(signal, gracefulShutdown)
);
