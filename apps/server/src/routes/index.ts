import { Router } from "express";
import sessionRouter from "./session.route.js";

const mainRouter = () => {
	return Router().use("/session", sessionRouter());
};

export default mainRouter;
