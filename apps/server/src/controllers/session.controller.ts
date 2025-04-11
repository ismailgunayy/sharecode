import { Request, Response } from "express";

import { TSession } from "@/types/common.type";
import redisClient from "@/services/cache";
import { v4 as uuid } from "uuid";

export const createSession = async (_req: Request, res: Response) => {
	const sessionId = uuid();

	const session: TSession = {
		id: sessionId,
		createdAt: new Date(),
		updatedAt: null,
		data: null,
		language: "typescript"
	};

	try {
		// redisClient.set(sessionId, JSON.stringify(session));
	} catch (error) {
		console.error("Redis Error", error);
	}

	res.status(201).json(session);
};

export const deleteSession = async (req: Request, res: Response) => {
	if (!req.body.sessionId) {
		res.status(400).json({ error: "sessionId is required" });
	}
	const sessionId: string = req.body.sessionId;

	try {
		redisClient.del(sessionId);
	} catch (error) {
		console.error("Redis Error", error);
		res.status(500).json({ error: "Internal Server Error" });
	}

	res.status(200).json({ message: "Session deleted" });
};
