import CacheService from "../services/cache.js";
import { TController } from "../types/express.type.js";

const connectCacheService = (cacheService: CacheService): TController => {
	return async (_req, _res, next) => {
		if (!cacheService.isConnected()) {
			await cacheService.start();
		}

		next();
	};
};

export default connectCacheService;
