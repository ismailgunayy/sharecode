import { Router } from "express";

const healthRouter = () => {
	return Router().get("/", (_req, res) => res.status(200).send("OK"));
};

export default healthRouter;
