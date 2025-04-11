import { createSession, deleteSession } from "@/controllers/session.controller";

import { Router } from "express";

const sessionRouter = () => {
	return Router().post("/", createSession).delete("/", deleteSession);
};

export default sessionRouter;
