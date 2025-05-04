import { Router } from "express";
import { TControllers } from "../types/express.type.js";
import healthRouter from "./health.route.js";
import sessionRouter from "./session.route.js";

const mainRouter = (controllers: TControllers) => {
	return Router()
		.use("/health", healthRouter())
		.use("/session", sessionRouter(controllers.session));
};

export default mainRouter;
