import { RedisClientType, createClient } from "redis";

import config from "../config/env.config.js";

class CacheService {
	private connected: boolean = false;
	private client: RedisClientType;
	private timer: NodeJS.Timeout | null = null;
	private readonly cacheServiceSleepTime: number;
	private readonly dataTtlTime: number;

	public constructor() {
		this.client = createClient({ url: config.cache.REDIS_URL });

		this.client.on("error", (error) => {
			console.error("Redis Client Error", error);
		});

		this.cacheServiceSleepTime = config.cache.SLEEP_TIME_IN_MINUTES * 60 * 1000;
		this.dataTtlTime = config.cache.DATA_TTL_IN_HOURS * 60 * 60;
	}

	public async start() {
		if (!this.connected) {
			await this.client.connect();
			this.connected = true;

			this.resetTimer();
		}
	}

	public async stop() {
		this.clearTimer();

		await this.client.disconnect();
		this.connected = false;
	}

	public isConnected() {
		return this.connected;
	}

	public async get(key: string): Promise<string | null> {
		return this.executeCacheOperation(async () => {
			return await this.client.get(key);
		});
	}

	public async set(key: string, value: string): Promise<string | null> {
		return this.executeCacheOperation(async () => {
			// EX: Expire time in seconds
			return await this.client.set(key, value, { EX: this.dataTtlTime });
		});
	}

	public async del(key: string): Promise<number> {
		return this.executeCacheOperation(async () => {
			return await this.client.del(key);
		});
	}

	private async executeCacheOperation<T>(op: () => Promise<T>) {
		if (!this.connected) {
			await this.start();
		} else {
			this.resetTimer();
		}

		return await op();
	}

	private resetTimer() {
		this.clearTimer();

		this.timer = setTimeout(async () => await this.stop(), this.cacheServiceSleepTime);
	}

	private clearTimer() {
		if (this.timer) {
			clearTimeout(this.timer);
			this.timer = null;
		}
	}
}

export default CacheService;
