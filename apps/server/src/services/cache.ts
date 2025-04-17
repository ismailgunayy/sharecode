import { RedisClientType, createClient } from "redis";

import config from "../config/index.js";

class CacheService {
	private connected: boolean = false;
	private client: RedisClientType;
	private lastActivity: number = Date.now();
	private inactivityTimer: NodeJS.Timeout | null = null;
	private readonly INACTIVITY_TIMEOUT = 10 * 60 * 1000; // 10 minutes

	public constructor() {
		this.client = createClient({ url: config.REDIS_URL });

		this.client.on("error", (error) => {
			console.error("Redis Client Error", error);
		});
	}

	public async start() {
		if (!this.connected) {
			await this.client.connect();
			this.connected = true;
			this.monitorInactivity();
		}
	}

	public async stop() {
		if (this.connected) {
			if (this.inactivityTimer) {
				clearInterval(this.inactivityTimer);
				this.inactivityTimer = null;
			}
			await this.client.disconnect();
			this.connected = false;
		}
	}

	public isConnected() {
		return this.connected;
	}

	public async get(key: string): Promise<string | null> {
		return this.executeCacheOperation(() => this.client.get(key));
	}

	public async set(key: string, value: string) {
		return this.executeCacheOperation(() => this.client.set(key, value));
	}

	public async del(key: string) {
		return this.executeCacheOperation(() => this.client.del(key));
	}

	private async executeCacheOperation<T>(operation: () => Promise<T>) {
		if (!this.connected) {
			await this.start();
		}

		this.lastActivity = Date.now();
		return await operation();
	}

	private monitorInactivity() {
		if (this.inactivityTimer) {
			clearInterval(this.inactivityTimer);
		}

		this.inactivityTimer = setInterval(
			async () => {
				console.log((Date.now() - this.lastActivity) / 1000);
				const inactive =
					Date.now() - this.lastActivity > this.INACTIVITY_TIMEOUT;

				if (this.connected && inactive) {
					await this.stop();
				}
			},
			2.3 * 60 * 1000
		);
	}
}

export default CacheService;
