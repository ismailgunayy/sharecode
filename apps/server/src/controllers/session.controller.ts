import CacheService from "../services/cache.service.js";
import { TController } from "../types/express.type.js";
import { TSession } from "../types/session.type.js";
import { v4 as uuid } from "uuid";

class SessionController {
	private cacheService: CacheService;

	public constructor(cacheService: CacheService) {
		this.cacheService = cacheService;
	}

	getSession: TController = async (req, res) => {
		const sessionID = req.params.sessionID;

		if (!sessionID) {
			return res.status(401).json({ message: "'sessionID' is required", success: false });
		}

		try {
			const response = await this.cacheService.get(sessionID);

			if (response) {
				const session: TSession = JSON.parse(response);

				return res.status(200).json({
					message: "Session found",
					success: true,
					data: session
				});
			} else {
				return res.status(404).json({ message: "Session not found", success: false });
			}
		} catch (error) {
			console.error("Error getting the session:", error);

			return res.status(500).json({ message: "Couldn't get session info", success: false });
		}
	};

	createSession: TController = async (_req, res) => {
		const sessionID = uuid();
		const now = new Date();

		const session: TSession = {
			id: sessionID,
			createdAt: now,
			updatedAt: null,
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
		} catch (error) {
			console.error("Error creating the session:", error);

			return res.status(500).json({ message: "Couldn't create the session", success: false });
		}
	};

	deleteSession: TController = async (req, res) => {
		const sessionID: string = req.body.sessionID;

		if (!sessionID) {
			return res.status(400).json({ message: "'sessionID' is required", success: false });
		}

		try {
			await this.cacheService.del(sessionID);

			return res.status(200).json({ message: "Session deleted succesfully", success: true });
		} catch (error) {
			console.error("Error deleting the session:", error);

			return res.status(500).json({ message: "Couldn't delete the session", success: false });
		}
	};
}

export default SessionController;
