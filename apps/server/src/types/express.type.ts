import { NextFunction, Request, Response } from "express";

export type TController = (
	req: Request,
	res: Response<{
		data?: number | string | object;
		message: string;
		success: boolean;
	}>,
	next: NextFunction
) => Promise<unknown>;
