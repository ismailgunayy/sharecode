import { Request } from "express";
import morgan from "morgan";

// custom tokens
morgan.token("base-url", (req: Request) => req.baseUrl || "/");
morgan.token("query", (req: Request) => JSON.stringify(req.query));
morgan.token("params", (req: Request) => JSON.stringify(req.params));

const httpLogFormat =
	"[:date[iso]] Received :method request for :base-url from :remote-addr with query: :query and params: :params | Status: :status | ResponseTime: :response-time ms | UA: :user-agent";

export const httpLogger = morgan(httpLogFormat);

export const logger = {
	info(message: string) {
		const timestamp = new Date().toISOString();
		console.log(`[${timestamp}] ${message}`);
	},

	warn(message: string) {
		const timestamp = new Date().toISOString();
		console.warn(`[${timestamp}] WARNING: ${message}`);
	},

	error(message: string, error?: unknown) {
		const timestamp = new Date().toISOString();
		console.error(`[${timestamp}] ERROR: ${message}`, error);
	}
};
