import { Router } from "express";
import SessionController from "../controllers/session.controller.js";

const sessionRouter = (controller: SessionController) => {
	return Router()
		.get("/:sessionID", controller.getSession)
		.post("/", controller.createSession)
		.delete("/", controller.deleteSession);
};

export default sessionRouter;
