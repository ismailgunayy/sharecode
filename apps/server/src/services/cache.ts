import { RedisClientType, createClient } from "redis";

import config from "../config/index.js";

class CacheService {
	private client: RedisClientType;

	public constructor() {
		this.client = createClient({ url: config.REDIS_URL });

		this.client.on("error", (error) => {
			console.error("Redis Client Error", error);
		});
	}

	public async connect() {
		await this.client.connect();
	}

	public async get(key: string): Promise<string | null> {
		return await this.client.get(key);
	}

	public async set(key: string, value: string) {
		await this.client.set(key, value);
	}

	public async del(key: string) {
		await this.client.del(key);
	}
}

export default CacheService;
