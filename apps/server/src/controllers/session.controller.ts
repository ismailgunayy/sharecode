import CacheService from "../services/cache.js";
import { TController } from "../types/express.type.js";
import { TSession } from "../types/common.type.js";
import { v4 as uuid } from "uuid";

class SessionController {
	private cacheService: CacheService;

	public constructor(cacheService: CacheService) {
		this.cacheService = cacheService;
	}

	get: TController = async (req, res) => {
		const sessionID = req.params.sessionID;

		if (!sessionID) {
			return res
				.status(401)
				.json({ message: "'sessionID' is required", success: false });
		}

		try {
			const response = await this.cacheService.get(sessionID);

			if (response) {
				const session = JSON.parse(response) as TSession;
				return res
					.status(200)
					.json({ message: "Session found", success: true, data: session });
			} else {
				return res
					.status(404)
					.json({ message: "Session not found", success: false });
			}
		} catch {
			return res
				.status(500)
				.json({ message: "Internal Server Error", success: false });
		}
	};

	create: TController = async (_req, res) => {
		const sessionID = uuid();
		const now = new Date();

		const session: TSession = {
			id: sessionID,
			createdAt: now,
			updatedAt: now,
			data: "",
			language: "typescript"
		};

		try {
			await this.cacheService.set(sessionID, JSON.stringify(session));

			return res.status(201).json({
				message: "Session created succesfully",
				success: true,
				data: session
			});
		} catch {
			return res
				.status(500)
				.json({ message: "Internal Server Error", success: false });
		}
	};

	delete: TController = async (req, res) => {
		const sessionID: string = req.body.sessionID;

		if (!sessionID) {
			return res
				.status(400)
				.json({ message: "'sessionID' is required", success: false });
		}

		try {
			await this.cacheService.del(sessionID);
		} catch {
			return res
				.status(500)
				.json({ message: "Internal Server Error", success: false });
		}

		return res
			.status(200)
			.json({ message: "Session deleted succesfully", success: true });
	};
}

export default SessionController;
