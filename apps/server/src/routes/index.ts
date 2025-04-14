import { Router } from "express";
import healthRouter from "./health.route.js";
import sessionRouter from "./session.route.js";

const mainRouter = () => {
	return Router()
		.use("/health", healthRouter())
		.use("/session", sessionRouter());
};

export default mainRouter;
