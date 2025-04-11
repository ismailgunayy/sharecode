export type TLanguage = "javascript" | "typescript";

export type TSession = {
	id: string;
	createdAt: Date;
	updatedAt: Date | null;
	data: string | null;
	language: TLanguage;
};
