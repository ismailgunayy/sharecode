import CacheService from "../services/cache.js";
import HTTPService from "../services/http.js";
import SessionController from "../controllers/session.controller.js";
import SocketService from "../services/socket.js";

// Services
export const cacheService = new CacheService();
export const httpService = new HTTPService();
export const socketService = new SocketService(cacheService);

// Controllers
const sessionController = new SessionController(cacheService);

export const controllers = {
	session: sessionController
};
