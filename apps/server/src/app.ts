import createHTTPServer from "./services/http";
import createSocketServer from "./services/socket";
import env from "./common/env";

const httpServer = createHTTPServer();
const socketServer = createSocketServer();
socketServer.attach(httpServer);

httpServer.listen(env.PORT, () => {
	console.log(`Server listening on port ${env.PORT}`);
});

function gracefulShutdown() {
	socketServer.close();
	httpServer.close();
}

// TODO: Change with 'satisfies' and look into the 'sort-imports' package
(["SIGINT", "SIGTERM"] as NodeJS.Signals[]).forEach((signal) =>
	process.on(signal, gracefulShutdown)
);
