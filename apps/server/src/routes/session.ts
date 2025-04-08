import { Router } from "express";
import { createSession } from "@/controllers/session";

const sessionRouter = () => {
	return Router().get("/", createSession);
};

export default sessionRouter;
