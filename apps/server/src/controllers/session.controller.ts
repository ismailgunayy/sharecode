import { TController } from "@/types/express.type";
import { TSession } from "@/types/common.type";
import redisClient from "@/services/cache";
import { v4 as uuid } from "uuid";

export const getSession: TController = async (req, res) => {
	const sessionID = req.params.sessionID;

	if (!sessionID) {
		return res
			.status(401)
			.json({ message: "'sessionID' is required", success: false });
	}

	try {
		const response = await redisClient.get(sessionID);

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

export const createSession: TController = async (_req, res) => {
	const sessionID = uuid();

	const session: TSession = {
		id: sessionID,
		createdAt: new Date(),
		updatedAt: null,
		data: "",
		language: "typescript"
	};

	try {
		await redisClient.set(sessionID, JSON.stringify(session));

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

export const deleteSession: TController = async (req, res) => {
	const sessionID: string = req.body.sessionID;

	if (!sessionID) {
		return res
			.status(400)
			.json({ message: "'sessionID' is required", success: false });
	}

	try {
		await redisClient.del(sessionID);
	} catch {
		return res
			.status(500)
			.json({ message: "Internal Server Error", success: false });
	}

	return res
		.status(200)
		.json({ message: "Session deleted succesfully", success: true });
};
