import CacheService from "./services/cache.js";
import HTTPService from "./services/http.js";
import SessionController from "./controllers/session.controller.js";
import SocketService from "./services/socket.js";
import { TControllers } from "./types/express.type.js";
import mainRouter from "./routes/index.js";

// Services
const cacheService = new CacheService();
const httpService = new HTTPService();
const socketService = new SocketService(cacheService);

// Controllers
const sessionController = new SessionController(cacheService);

const controllers: TControllers = {
	session: sessionController
};

const init = async () => {
	socketService.start(httpService.server);
	httpService.start(mainRouter(controllers));

	function gracefulShutdown() {
		cacheService.stop();
		socketService.stop();
		httpService.stop();
	}

	// TODO: Change with 'satisfies' and look into the 'sort-imports' package
	(["SIGINT", "SIGTERM"] as NodeJS.Signals[]).forEach((signal) =>
		process.on(signal, gracefulShutdown)
	);
};

init().catch((error) => {
	console.error("Failed to start server:", error);
	process.exit(1);
});
