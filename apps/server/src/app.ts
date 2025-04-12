import { cacheService, httpService, socketService } from "./container/index.js";

import config from "./config/index.js";
import mainRouter from "./routes/index.js";

const init = async () => {
	await cacheService.connect();

	socketService.server.attach(httpService.server);
	httpService.setup(mainRouter());
	httpService.server.listen(config.PORT, () => {
		console.log(`Server listening on port ${config.PORT}`);
	});

	function gracefulShutdown() {
		socketService.server.close();
		httpService.server.close();
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
