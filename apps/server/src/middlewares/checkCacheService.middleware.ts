import CacheService from "../services/cache.service.js";
import { TController } from "../types/express.type.js";

const checkCacheService = (cacheService: CacheService): TController => {
	return async (_req, _res, next) => {
		if (!cacheService.isConnected()) {
			await cacheService.start();
		}

		next();
	};
};

export default checkCacheService;
