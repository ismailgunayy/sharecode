import { Router } from "express";
import sessionRouter from "./session.route";

const mainRouter = () => {
	return Router().use("/session", sessionRouter());
};

export default mainRouter;
