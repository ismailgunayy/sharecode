import ENDPOINTS from "@/common/endpoints";
import api from ".";

type TSession = {
	id: string;
	createdAt: Date;
	updatedAt: Date | null;
	data: string;
	language: string;
};

export const getSession = async (
	sessionID: string
): Promise<TSession | void> => {
	try {
		const response = await api.get(`${ENDPOINTS.SESSION.GET}/${sessionID}`);

		if (!response.data.success) {
			throw new Error("Could not fetch the sesssion");
		}

		return response.data.data;
	} catch (error) {
		console.error(error);
	}
};

export const createSession = async (): Promise<TSession | void> => {
	try {
		const response = await api.post(ENDPOINTS.SESSION.CREATE);

		if (!response.data.success) {
			throw new Error("Could not create the session");
		}

		return response.data.data;
	} catch (error) {
		console.error(error);
	}
};
