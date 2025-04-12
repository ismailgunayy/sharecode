import {
	createSession,
	deleteSession,
	getSession
} from "@/controllers/session.controller";

import { Router } from "express";

const sessionRouter = () => {
	return Router()
		.get("/:sessionID", getSession)
		.post("/", createSession)
		.delete("/", deleteSession);
};

export default sessionRouter;
