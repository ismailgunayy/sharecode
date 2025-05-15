import ENDPOINTS from "@/common/endpoints";
import { TAPIResponse } from "@/types/api";
import { TSession } from "@/types/session";
import api from ".";

export const getSession = async (sessionID: string): Promise<TSession | void> => {
	try {
		const { data } = await api.get<TAPIResponse>(`${ENDPOINTS.SESSION.GET}/${sessionID}`);

		if (!data.success) {
			throw new Error("Couldn't get session info");
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
			throw new Error("Couldn't create the session");
		}

		return data.data as TSession;
	} catch (error) {
		console.error(error);
	}
};
