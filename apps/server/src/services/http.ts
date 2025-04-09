import { config } from "@/config";
import cors from "cors";
import express from "express";
import http from "http";
import mainRouter from "@/routes";

const createHTTPServer = () => {
	const app = express();
	app.use(cors(config.cors));

	app.use("/api", mainRouter());
	return http.createServer(app);
};

export default createHTTPServer;
