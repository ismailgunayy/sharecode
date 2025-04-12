import { Router } from "express";
import { controllers } from "../container/index.js";

const sessionRouter = () => {
	return Router()
		.get("/:sessionID", controllers.session.get)
		.post("/", controllers.session.create)
		.delete("/", controllers.session.delete);
};

export default sessionRouter;
