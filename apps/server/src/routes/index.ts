import { Router } from "express";
import sessionRouter from "./session";

const mainRouter = () => {
	return Router().use("/session", sessionRouter());
};

export default mainRouter;
