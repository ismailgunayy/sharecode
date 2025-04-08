import { Request, Response } from "express";

export const createSession = async (req: Request, res: Response) => {
	res.json({
		message: "Hello from the server!",
		time: new Date().toISOString()
	});
};
