import { NextFunction, Request, Response } from "express";

import SessionController from "../controllers/session.controller.js";

type APIResponse = {
	data?: number | string | object;
	message: string;
	success: boolean;
};

export type TController = (req: Request, res: Response<APIResponse>, next: NextFunction) => Promise<unknown>;

export type TControllers = {
	session: SessionController;
};
