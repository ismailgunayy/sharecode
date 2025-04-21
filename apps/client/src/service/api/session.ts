import ENDPOINTS from "@/common/endpoints";
import { TAPIResponse } from "@/types/api";
import { TLang } from "@/types/editor";
import api from ".";

type TSession = {
	id: string;
	createdAt: Date;
	updatedAt: Date | null;
	data: string;
	language: TLang;
};

export const getSession = async (
	sessionID: string
): Promise<TSession | void> => {
	try {
		const { data } = await api.get<TAPIResponse>(
			`${ENDPOINTS.SESSION.GET}/${sessionID}`
		);

		if (!data.success) {
			throw new Error("Could not fetch the sesssion");
		}

		return data.data as TSession;
	} catch (error) {
		console.error(error);
	}
};

export const createSession = async (): Promise<TSession | void> => {
	try {
		const { data } = await api.post<TAPIResponse>(ENDPOINTS.SESSION.CREATE);

		if (!data.success) {
			throw new Error("Could not create the session");
		}

		return data.data as TSession;
	} catch (error) {
		console.error(error);
	}
};
