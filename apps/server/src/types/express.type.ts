import { NextFunction, Request, Response } from "express";

import SessionController from "../controllers/session.controller.js";

export type TController = (
	req: Request,
	res: Response<{
		data?: number | string | object;
		message: string;
		success: boolean;
	}>,
	next: NextFunction
) => Promise<unknown>;

export type TControllers = {
	session: SessionController;
};
