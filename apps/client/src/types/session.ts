import { TLang } from "./editor";

export type TSession = {
	id: string;
	createdAt: Date;
	updatedAt: Date | null;
	data: string;
	language: TLang;
};
